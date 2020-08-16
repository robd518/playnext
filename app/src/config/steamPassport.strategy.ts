import steam from 'passport-steam'

const steamStrategy = new steam.Strategy({
    returnURL: `${process.env.PASSPORT_STEAM_RETURN_URL}`,
    realm: `${process.env.PASSPORT_STEAM_REALM}`,
    apiKey: process.env.STEAM_WEB_API_KEY
},
    function (identifier: any, profile: any, done: any) {
        // asynchronous verification, for effect...
        process.nextTick(function () {

            // To keep the example simple, the user's Steam profile is returned to
            // represent the logged-in user.  In a typical application, you would want
            // to associate the Steam account with a user record in your database,
            // and return that user instead.
            profile.identifier = identifier;
            console.log(profile)
            return done(null, profile);
        });
    })

export default steamStrategy