import { useState } from 'react'

const signUp = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [name, setName] = useState('')

   const handleSubmit = () => {}

   return (
      <div>
         sign up
         <div>
            <form onSubmit={handleSubmit}>
               <input
                  type='text'
                  value={name}
                  onChange={e => setName(e.target.value)}
               />
               <input
                  type='text'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <input
                  type='text'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               />
               <button type='submit'>Sign up</button>
            </form>
         </div>
      </div>
   )
}

export default signUp
