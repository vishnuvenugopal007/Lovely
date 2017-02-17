/* eslint no-console: "off" */
/* eslint no-unused-vars: "off" */

console.log(process.env.MY_SECRET)

//require express
const express = require('express')
const app = express()
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'vishnu',
    database: 'LovelyTables',
  }
})

module.exports = db
