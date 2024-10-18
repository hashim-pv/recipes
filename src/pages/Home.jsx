import React, { useEffect,useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'


const Home = () => {
 const  dispatch= useDispatch()
 const{allProducts,loading,error}=useSelector(state=>state.productReducer)
//  console.log(allProducts);
const [currentPage,setCurrentPage]=useState(1)
const productPerPage =8
const totalPages= Math.ceil(allProducts?.length/productPerPage)
const currentPageLastProductIndex= currentPage * productPerPage
const  currentPageStartProductIndex = currentPageLastProductIndex - productPerPage
const visibleProductsCards =
allProducts?.slice(currentPageStartProductIndex,currentPageLastProductIndex)
 
 useEffect(()=>{
    dispatch(fetchAllProducts())
 },[])
 const navigateToNextPage =()=>{
   if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
   }
 }
 const navigateToprevPage =()=>{
   if(currentPage!=1){
      setCurrentPage(currentPage-1)
   }
 }
  return (
   <>
   <Header insideHome={true}/>
<div  style={{marginTop:'80px' }} className='container mx-auto px-4'>
   {
      loading?
      <div style={{height:"30vh"}} className="flex justify-center items-center font-bold">
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAwFBMVEX////6+vr89PT86+D86Nr9+Pj4+fXk59XM1c3++/qxvIHK0a/86974sHj2k3Dn69v67On8k6fa3erg5e2vwNfx8veWksqhsdTx8uqms2+yvYrf49Srt3nr7eK8w5L+9vL5yav4tYP5u4z5vpT74dO/yJ76x6H4rXD3s4/72sP5xrD60bf51Mz5ycD2o4n4rZn75N/6zr72mYT1s5/7sLf9iqL7wcrg39z4zM342tj7pLH8ucLGw92oq9LEy965u9k4r+HaAAACRUlEQVR4nO3YW1faQBSG4ZnEBKJgQsipNDRYa+kBqrUViq3p//9XnUlCKrT342Lex2XibLiYfO7Zi4UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC8AIHjmN7Ci+CHhb55juPpexCY3Y5pg1ez16KPo3JHducxKMtZKITTxOG5rluZ3pFR89l5eeG33RFEKg7TGzLLvyjPZ4UepYE6KjY3h3emW2H+piznahHoyeFG+gU75+ni6u31OyHCm5uiLVRR1YQyGtnYI++X4+XVQp0Xf1/RXeGeKTbG4X1Yjsfjj4fFJg1r5qk8WF2rPD4Fuir3L4z63pBSnLyjR4w+L0aH1cqtLBqk+sFl93/v7uqqf/SyW7d/dG896R6R7SHQEUSr9XoVtU/d1Nuy9P2iKALRlY776bTsp4QUqy+Xyu1dV+3j8MOBEvr7t1oSx/qyseqqfRzFoGFLHN1MENHX2/v7byunrT47LMU8HMwLaclh6edj4ERRtV/2caiLJ/2gLZ38KD0W/PP5U3/tYVUEf0XfHyabw9JwONx6ZnZj2o+HyeQ/cQyHqZn9mLVTYUwe7w6LqbV5qJPy+FN9DovjblbIqYoh2OrzYnZnRuw2m53K4FeWTYWY6t8kUVeRbreWzlIlznQcaZ6kOo7ExmPyTPqUZU+pqPM8FmmdJLW9jaHp5oiFSPK8VgvVHnbHUWfZb3VA8iYOWbfTw17Tp+Z4tN0h/Njyw9KJ9exAr65N7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7PIHLKEe4cOWo6AAAAAASUVORK5CYII=" alt="" />
      </div>
      :
     <>
         <div className='grid grid-cols-4 gap-4'>
          {
            allProducts.length>0?
            visibleProductsCards?.map(products=>(
               <div className="rounded border p-2 shadow">
               <img style={{width:'100%',height:'200px'}} src={products?.image} alt="" />
               <div className="text-center">
                 <h3 className="text-xl font-bold">{products?.name}</h3>
                 <Link className="bg-blue-500 text-white p-1 mt-3 inline-block rounded " to={`/${products?.id}/view`}>view more</Link>
               </div>
          
              </div>
        
            )):
            <div className="font-bold text-center mt-5 mb-5 text-red-600"> No recipes</div>
          }
         </div>
         {/**/ }
         <div className="flex justify-center items-center mt-5 mb-5"><span onClick={navigateToprevPage} style={{cursor:'pointer'}}><i className="fa-solid fa-backward me-5"></i>
        </span>
        <span>{currentPage} of {totalPages}</span>
        <span onClick={navigateToNextPage} style={{cursor:'pointer'}}><i className="fa-solid fa-forward ms-5"></i>
        </span></div>
     </>

   }
    </div>
   
   </>
  )
}

export default Home