'use strict'

const fs = require('fs')
const { Client } = require('@elastic/elasticsearch')

const client = new Client({
  node: 'https://elastic:changeme@localhost:9200',
  // ssl: {
  //   rejectUnauthorized: false
  // }
})

client.info(console.log)
