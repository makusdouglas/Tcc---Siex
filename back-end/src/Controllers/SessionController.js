import jwt from "jsonwebtoken";
import connection from "../database/connection";
import auth from "../config/auth";
import bcrypt from "../utils/bcrypt";

import { promisify } from "util";

export default {
  async create(req, res) {
    const { id, senha } = req.body;
    const [user] = await connection("usuarios")
      .where("id", id)
      .select("id", "nome", "email", "senha");
    console.log(user);

    if (!user) {
      return res.status(401).json({ error: "user not found" });
    }

    const passwordCheck = await bcrypt.checkPassword(senha, user.senha);

    if (!passwordCheck) {
      return res.status(401).json({ error: "Password does not match" });
    }
    const { nome, email } = user;
    return res.json({
      user: {
        id,
        nome,
        email,
      },
      token: jwt.sign({ id }, auth.secret, {
        expiresIn: auth.expiresIn,
      }),
    });
  },
  async index(req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: "Token not provided" });
    }
    const [, token] = authHeader.split(" ");

    try {
      const decoded = await promisify(jwt.verify)(token, authConfig.secret);
      console.log(decoded);
      req.userId = decoded.id;
      return res.status(200).json(true);
    } catch (err) {
      return res.status(401).json({ error: "Token invalid" });
    }
  },
};
