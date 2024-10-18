import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
 
  const dispatch=useDispatch()

  const mywishlist=useSelector(state=>state.wishlistReducer)
  const myCart = useSelector(state=>state.cartReducer)
  return (
     <nav className='flex w-full bg-green-500 fix top-0 p-5 items-center' >
      <Link className=' text-white font-semibold' to={'/'}><i class="fa-solid fa-bowl-food"></i>RECIPES</Link>
      <ul className='flex-1 text-right '>
        {insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLocaleLowerCase()))} style={{width:'300px'}} type="text" className='rounded p-1' placeholder='Sreach the products here!' /></li>}
        {/* <li  className='list-none inline-block px-5'><Link to={'/wishlist'} ><i class="fa-solid fa-heart  text-red-600"></i>Wishlist <span className='bg-black rounded p-1 text-white'>{mywishlist.length}</span></Link></li>
        <li  className='list-none inline-block px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-plus me-1 text-green-600"></i>cart <span className='bg-black rounded p-1 text-white'>{myCart.length}</span></Link></li> */}

      </ul>
     </nav>
  )
}

export default Header