import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'


const MainTwo = (props) => {


  return (
    <div>
        <ProductForm />

        {/* <ProductList productList={productList} removeFromDom={removeFromDom}/> */}
        <ProductList />
    </div>
  )
}

export default MainTwo

//////REFACTORED CODE
// const [productList, setProductList]=useState([])

// useEffect(()=>{
//   axios.get('http://localhost:8000/api/products')
//     .then (res=>{
//       setProductList(res.data)
//     })
//     .catch((err)=>console.log(err))
// },[])

// const removeFromDom = productId =>{
//   axios.delete('http://localhost:8000/api/products/'+ productId)
//     .then((res)=>{
//       console.log(res)
//       console.log(res.data)
//       setProductList(productList.filter(product=>product._id !== productId))
//     })
//     .catch((err)=>console.log(err))
// }
// const createProduct = productParam=>{
//   axios.post('http://localhost:8000/api/products/' + productParam)
//     .then(res=>{
//       console.log(res)
//       console.log(res.data)
//       setProductList([...productList, res.data])
//     })
//     .catch((err)=>console.log(err))
// }
 ///RETURN:
        {/* <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice=""
        initialDescription=""/> */}