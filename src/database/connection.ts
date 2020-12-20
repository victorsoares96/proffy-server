import knex from 'knex'
import 'dotenv/config'

const db = knex({
  client: 'pg',
  connection: {
    host : process.env.PG_HOST,
    port : Number(process.env.PG_PORT),
    user : process.env.PG_USER,
    password : process.env.PG_PASSWORD,
    database : process.env.PG_DATABASE,
  },
  useNullAsDefault: true
})

export default db