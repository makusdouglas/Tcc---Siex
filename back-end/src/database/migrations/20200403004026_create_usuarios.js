
exports.up = function(knex) {
  return knex.schema.createTable('usuarios', function(table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('email').notNullable().unique();
    table.string('senha').notNullable();
    table.string('curso').notNullable();
    table.integer('telefone').notNullable();
    table.string('tipo_participante').notNullable();
    table.string('tipo_usuario').notNullable();

  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('usuarios');
  
};
