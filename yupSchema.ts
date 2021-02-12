import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
   name: yup.string().min(3).max(10).required(),
   email: yup.string().email(),
   password: yup.string().min(6).required(),
})
