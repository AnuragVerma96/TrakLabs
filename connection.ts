//import Client from 'pg';
//const {Client} = ('pg');

// const C = new Client(
// {
//     host: "localhost",
//     user: "postgres",
//     port: 5432,
//     password: "somi007!",
//     database: "postgres"
// })

// C.connect();
// export default C;
import { Client } from 'pg';
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'traklabs',
  password: 'somi007!',
  port: 5432,
})

client.connect();
export default client;