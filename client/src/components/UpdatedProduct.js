import React,{useEffect, useState} from 'react'
import axios from 'axios'
import DeleteButton from './DeleteButton'
import ProductForm from './ProductForm'
import { useNavigate} from 'react'
import { useParams } from 'react-router-dom'

const UpdatedProduct = (props) => {
    const {id}=useParams()
    const[title, setTitle]=useState("")
    const [price, setPrice]=useState("")
    const [description, setDescription]= useState("")
    const navigate = useNavigate();



    useEffect(()=>{
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res=>{
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }) 
        .catch(err=>console.log(err))
    },[id])

    const updateProduct=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/products/' + id,{
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res)
                navigate("/home")
            })
            .catch(err=>console.log(err))
    }
    return (
        <div>
            <h3>Update a Product</h3>
                <form onSubmit={updateProduct}>
                    <label >Title:</label>
                    <input type="text"
                    name='title' value={title}
                    onChange={(e)=>{setTitle(e.target.value)}}/>

                    <label >Price:</label>
                    <input type="text"
                    name='price' value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}/>

                    <label >Description:</label>
                    <input type="text" 
                    name='description' value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}/>
                    <input type="submit"/> 
                    <button>Submit</button>

            </form> 
        </div>
    )
}

export default UpdatedProduct


    // const [product, setProduct]=useState("")
    // const [loaded, setLoaded]=useState(false)
    // const navigate = useNavigate

    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/products/' + id)
    //         .then(res=>{
    //             setProduct(res.data)
    //             setLoaded(true)
    //         })
    // },[])

    // const updateProduct=product=>{
    //     axios.put('http://localhost:8000/api/products/' + id + product)
    //             .then(res=>console.log(res))
    // }


    // {
    //     loaded &&( 
    //         <>
    //             <ProductForm onSubmitProp={updateProduct}
    //                 initialTitle={product.title}
    //                 initialPrice={product.price}
    //                 initialDescription={product.description}/>
    //             <DeleteButton personId={product._id} successCallBack={() => navigate("/")} />
    //         </>      
    //     )}