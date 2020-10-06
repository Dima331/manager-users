const express = require('express')
const config = require('config')
const app = express()

app.use(express.json({ extended: true }))

const PORT = config.get('port') || 5000

async function start() {
}
start()

app.listen(PORT, () => console.log(`here port ${PORT}`))