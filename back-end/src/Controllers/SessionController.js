import connection from '../database/connection';

export default {
  async create(req,res){
    const {id} = req.body;
    if(!id){
      return res.json({error: 'No id received'});
    }
    const user = await connection('usuarios')
    .where('id', id)
    .select('nome')
    .first();

    console.log("Verificando usuário ...")

    if(!user) {
      return res.status(400).json({error: 'No user fuont with this id'});
    }
    return res.json(user);
  }


}