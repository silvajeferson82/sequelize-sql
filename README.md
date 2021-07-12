# SEQUELIZE - NODE

### ESTRUTURA
SRC > CONFIG > DATABASE.JS (Conexão com o banco)

#### SRC > DATABASE > MIGRATIONS > MIGRATION.JS
#### SRC > DATABASE > INDEX.JS

# COMANDOS SEQUELIZE

### sequelize db:create (cria banco de dados)
### sequelize migration:create --name=create-users 
(cria migration e define nome da tabela)

### sequelize db:migrate (cria a tabela com as informações da migration)

### sequelize db:migrate:undo (desfaz a ultima tabela criada pela migration)