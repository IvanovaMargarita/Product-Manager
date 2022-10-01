import React,{useState} from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductList = (props) => {
    const [productList,setProductList]=useState([]) //refactored

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
        console.log(res.data);
            setProductList(res.data);
	})
        .catch((err)=>{
            console.log(err);
        })
    }, [])

    const deleteProduct=(productId)=>{
        axios.delete("http://localhost:8000/api/products/" + productId)
            .then(res=>{
                removeFromDom(productId)
            })
            .catch(err=> console.log(err))
    }
    const removeFromDom=productId=>
    {
        setProductList(productList.filter(product=> product._id !== productId))
    }
    
  return (
    <div>
        <h3>All Products:</h3>
        {/* {console.log("product", productList )} */}
        {
            productList.map((item,index)=>{
                return (
                    <div key={index}>
                        <Link to={`/products/${item._id}`}>{item.title}</Link>
                        <Link to={"/products/edit/"+item._id}>Edit</Link>
                        <button onClick={(e)=>deleteProduct(item._id)}>delete</button>
                        {/* <DeleteButton productID={product._id} successCallBack={()=>removeFromDom(product._id)}/> */}
                    </div>)
            })
        }   
    </div>
            
    )
}
export default ProductList
                        
                    
                
// useEffect(() => {
//     axios.get("http://localhost:8000/api/products")
//     .then((res) => {
//         console.log(res.data)
//         setProducts(res.data)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }, [])

// const removeFromDom = productID =>{
//     setProducts(products.filter(products=>products._id !== productID))
// }