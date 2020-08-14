import dotEnvExtended from 'dotenv-extended'
dotEnvExtended.load()
import express from 'express'
import next from 'next'

const port = parseInt(process.env.PORT || '3000', 10)
const host = process.env.HOST || '0.0.0.0'
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.listen(port, host, (err) => {
        if (err) throw err
        console.log(`Server is listening on ${host}:${port}`)
    })
})
