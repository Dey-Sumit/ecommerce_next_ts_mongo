import Navbar from './Navbar'

const Layout = ({ children }) => {
   return (
      <div className='text-white bg-black'>
         <Navbar />
         {children}
      </div>
   )
}

export default Layout
