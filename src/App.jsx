import { Routes,Route } from 'react-router-dom'
import './App.css'
import View from './pages/View'
import Home from './pages/Home'
import WishList from './pages/WishList'
import Cart from './pages/Cart'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/wishlist' element={<WishList/>} />
         <Route path='/cart' element={<Cart/>} />
        {/* :indicate which is path parameter of url ,path parameter will be stored in variable id  */}
         <Route path='/:id/view' element={<View/>} />
         <Route path='/*' element={<pnf/>} />

    </Routes>

 <Footer/>
    </>
  )
}

export default App
