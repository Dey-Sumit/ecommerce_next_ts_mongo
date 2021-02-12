import { FormEvent, useState } from 'react'

//todo react hook form
const createProduct = () => {
   const [name, setName] = useState('')
   const [price, setPrice] = useState('')
   const [media, setMedia] = useState(null)
   const [description, setDescription] = useState('')

   //TODO DO THIS IN SERVER
   const imageUpload = async () => {
      const formData = new FormData()
      formData.append('file', media)
      formData.append('upload_preset', 'ecommerce MERN')
      formData.append('cloud_name', 'dgmvj256k')
      try {
         const res = await fetch(
            'https://api.cloudinary.com/v1_1/dgmvj256k/image/upload',
            {
               method: 'POST',
               body: formData,
            }
         )
         const { url } = await res.json()
         return url
      } catch (error) {
         console.log(error.message)
         throw error
      }
   }

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('here')
      const imageUrl = await imageUpload()
      await fetch('/api/products/', {
         method: 'POST',
         //will be parsed automatically to json by next
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            name,
            price,
            mediaUrl: imageUrl,
            description,
         }),
      })
      console.log('here 2')
   }

   return (
      <div>
         <h5>Create Product</h5>
         <form
            onSubmit={handleSubmit}
            className='flex flex-col space-y-5 px-52'>
            <input
               type='text'
               value={name}
               placeholder='name'
               className='text-black'
               onChange={e => setName(e.target.value)}
            />
            <input
               type='text'
               value={price}
               placeholder='price'
               className='text-black'
               onChange={e => setPrice(e.target.value)}
            />
            <input
               type='file'
               placeholder='image'
               accept='image/*'
               onChange={e => setMedia(e.target.files[0])}
            />
            {media && (
               <img src={URL.createObjectURL(media)} className='w-72 h-72' />
            )}
            <input
               type='text'
               value={description}
               placeholder='desc'
               className='text-black'
               onChange={e => setDescription(e.target.value)}
            />
            <button className='p-2 border-2'>Add Product</button>
         </form>
      </div>
   )
}

export default createProduct
