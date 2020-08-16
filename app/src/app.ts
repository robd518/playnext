import dotEnvExtended from 'dotenv-extended'
dotEnvExtended.load()
import express from 'express'
import next from 'next'
import defaultErrorMiddleware from './middleware/defaultError.middleware'
import { connectToMongo } from './models'

const port = parseInt(process.env.PORT || '3000', 10)
const host = process.env.HOST || '0.0.0.0'
const dev = process.env.NODE_ENV !== 'production'
const nextapp = next({ dev })
const handle = nextapp.getRequestHandler()

async function main() {
    const app = express()
    await nextapp.prepare()
    await connectToMongo()

    app.all('*', (req, res) => {
        return handle(req, res)
    })
    app.use(defaultErrorMiddleware)

    app.listen(port, host, (err) => {
        if (err) throw err
        console.log(`Server is listening on ${host}:${port}`)
    })
}

main()