import jwt from 'jsonwebtoken';
import connection from '../database/connection';
import auth from '../config/auth';
import bcrypt from '../utils/bcrypt';


export default {
  async create(req, res){
    const {id, senha} = req.body;
    const [user] = await connection('usuarios')
    .where('id', id)
    .select('id','nome','email', 'senha');
    console.log(user);

    if (!user){
      return res.status(401).json({error: 'user not found'});
    }

    const passwordCheck = await bcrypt.checkPassword(senha, user.senha);

    if(!passwordCheck) {
      return res.status(401).json({error: 'Password does not match'});
    }
    const {nome, email} = user;
    return res.json({
      user : {
        id,
      nome,
      email
      },
      token: jwt.sign({id}, auth.secret,{
        expiresIn: auth.expiresIn,
      })
    })
    
  }
}
