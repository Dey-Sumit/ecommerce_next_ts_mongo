import bcrypt from 'bcryptjs'
import mongoose, { Schema, Model, Document } from 'mongoose'

// An interface that describes the properties
// needed to create a new user

interface UserAttrs {
   name: String
   email: String
   password: String
   role?: String
}

//An interface that describes the properties
// that a User Model has

interface UserModel extends Model<UserDoc> {
   build(attrs: UserAttrs): UserDoc
}

//An interface that describes the properties that a User
// document has

interface UserDoc extends Document {
   name: string
   password: string
   role: string //TODO use enum
   email: string
   // return type promise
   matchPassword(password: string): Promise<Boolean>
}

const userSchema = new Schema(
   {
      name: {
         required: true,
         type: String,
      },
      email: {
         required: true,
         type: String,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      role: {
         type: String,
         required: true,
         default: 'user',
         enum: ['user', 'admin', 'root'],
      },
   },
   {
      timestamps: true,
   }
)

// methods
userSchema.methods.matchPassword = async function (
   this: UserDoc,
   enteredPassword: string
) {
   return await bcrypt.compare(enteredPassword, this.password)
}

// static method
// userSchema.statics.build = (attrs: UserAttrs) => {
//    return new User(attrs)
// }

// add middleware before saving the data
// hash the password during registration
userSchema.pre('save', async function (this: UserDoc, next: Function) {
   // run oly if the password field is modified (ex: during update profile)
   if (!this.isModified('password')) {
      next()
   }
   const salt = await bcrypt.genSalt(10)
   this.password = await bcrypt.hash(this.password, salt)
})

//? Fix this type
export default (mongoose.models.User as mongoose.Model<UserDoc>) ||
   mongoose.model<UserDoc, UserModel>('User', userSchema)
// const user = User.build({})
// const buildUser = (attrs: UserAttrs) => {
//    return new User(attrs)
// }
