import React, { useState } from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    // const {initialTitle, initialPrice, initialDescription, onSubmitProp}=props
    const {product, setProduct}=props
    const[title, setTitle]=useState("")
    const [price, setPrice]=useState("")
    const [description, setDescription]= useState("")

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/products',{
            title,
            price,
            description
        } )
        .then(res=>{
            console.log(res)
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" name="title" value={title} 
                onChange={(e)=>setTitle(e.target.value)}/>
        
            <label htmlFor="price">Price:</label>
            <input type="text" name="price" value={price} 
                onChange={(e)=>setPrice(e.target.value)}/>
        
            <label htmlFor="description">Description:</label>
            <input type="text" name="description" value={description} 
                onChange={(e)=>setDescription(e.target.value)}/>
        
        <input type="submit"/>
        </form>
        {/* <form onSubmit={onSubmitHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" onChange={(e)=>setTitle(e.target.value)}/>

            <label htmlFor="title">Price:</label>
            <input type="text" onChange={(e)=>setPrice(e.target.value)}/>

            <label htmlFor="title">Description:</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}/>
            <input type="submit"/>

        </form> */}
    </div>
  )
}

export default ProductForm

// const onSubmitHandler=e=>{
//     e.preventDefault()
//     onSubmitProp({title,price,description})
// }