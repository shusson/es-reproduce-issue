'use strict'

const fs = require('fs')
const { Client } = require('elasticsearch')

const client = new Client({
  host: 'https://elastic:changeme@localhost:9200'
})

client.info(console.log)
