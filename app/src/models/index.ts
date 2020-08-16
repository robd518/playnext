import mongoose from 'mongoose'

import mongooseConfig from '../config/mongo.config'

const connectToMongo = async () => {
    return mongoose.connect(mongooseConfig.url)
}

export { connectToMongo }