import connection from '../database/connection';
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

    const response = await connection('usuarios').insert({
      id,
      nome,
      email,
      senha,
      curso,
      telefone,
      tipo_participante,
      tipo_usuario
    });
    return res.json(response);

  },
}