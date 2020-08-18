import steam from 'passport-steam'
import { Profile } from '../models'

const steamStrategy = new steam.Strategy({
    returnURL: `${process.env.PASSPORT_STEAM_RETURN_URL}`,
    realm: `${process.env.PASSPORT_STEAM_REALM}`,
    apiKey: process.env.STEAM_WEB_API_KEY
},
    function (identifier: any, profile: any, done: any) {
        Profile.update(
            { _id: profile.id },
            {
                $set: {
                    displayName: profile.displayName,
                    photos: profile.photos,
                    profileUrl: profile._json.profileurl,
                    communityVisibilityState: profile._json.communityvisibilitystate
                }
            },
            { upsert: true },
            (err, profile) => {
                return done(err, profile)
            }
        )
    })

export default steamStrategy