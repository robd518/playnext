import { createSchema, Type, typedModel } from 'ts-mongoose'

const ProfileSchema = createSchema(
    {
        _id: Type.number({ required: true }),
        displayName: Type.string(),
        photos: Type.array().of({
            value: Type.string()
        }),
        profileUrl: Type.string(),
        communityVisibilityState: Type.number()

    },
    { _id: false }
)

const Profile = typedModel('Profile', ProfileSchema)

export default Profile