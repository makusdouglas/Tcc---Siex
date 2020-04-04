
exports.up = function(knex) {
  return knex.schema.createTable('eventos', function(table){
    table.increments('id');
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
    table.integer('n_inscritos').nullable();
    table.float('valor_inscricao').notNullable();
    table.date('data_ev_inicio').notNullable();
    table.date('data_ev_fim').notNullable();
    table.date('data_inscricao_inicio').notNullable();
    table.date('data_inscricao_fim').notNullable();
    
  })
  
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('eventos');
  
};
