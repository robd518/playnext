// https://www.robinwieruch.de/mongodb-express-setup-tutorial
// https://www.npmjs.com/package/ts-mongoose
// https://github.com/liamcurry/passport-steam/issues/46
import mongoose from 'mongoose'
import mongooseConfig from '../config/mongo.config'
import Profile from './profile.model'

const connectToMongo = async () => {
    return mongoose.connect(mongooseConfig.url)
}

export {
    connectToMongo,
    Profile
}
