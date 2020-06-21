import knex from "knex";
import path from "path"; // lib que facilita o gerenciamento de path dentro da aplicação (windows/linux)

//knex é a lib para conexão com banco de dados sql, utiliza comandos js
const connection = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default connection;
