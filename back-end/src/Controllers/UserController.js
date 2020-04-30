import connection from '../database/connection';
import bcrypt from '../utils/bcrypt';
export default {
  async index(req, res){
    const response = await connection('usuarios').select('*');

    return res.json(response);
  },

  async create(req, res){
    const {
      id,
      nome,
      email,
      senha,
      curso,
      telefone,
      tipo_participante,
      tipo_usuario
    } = req.body;

    const [userExists] = await connection('usuarios').where({'email': email});
    console.log(userExists)

    if(userExists) {
      return res.status(401).json({error: 'User already exists'});
    }
    const password_hash = await bcrypt.generateHash(senha);

    const response = await connection('usuarios').insert({
      id,
      nome,
      email,
      senha: password_hash, // REMOVER A SENHA QUANDO ESTIVER EM MODO PRODUÇÃO
      curso,
      telefone,
      tipo_participante,
      tipo_usuario
    });
    return res.json(response);

  },
  async delete(req, res){
    console.log(req.userId);
    // const {id} = req.body;
    // const response = await connection('usuarios').where('id', id).del();
    // return res.json(response);
    return res.json({ok: true});
    // .where('id', id)
  }
}