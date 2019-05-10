import * as fs from 'fs'
import { Client } from '@elastic/elasticsearch'

const client = new Client({
  node: 'https://elastic:changeme@localhost:9200',
  ssl: {
    ca: fs.readFileSync('./certs/ca/ca.crt', 'utf8')
  }
})

client.info(console.log)
