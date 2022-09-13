import axios from 'axios'
import React from 'react'

const DeleteButton = (props) => {
    const {productId, successCallBack}=props
    
    const deleteProduct=e=>{
        axios.delete('http://localhost:8000/api/products/'+ productId)
            .then(res=>{
                successCallBack()
            })
    }
  return (
    <div>
        <button onClick={deleteProduct}>Delete</button>
    </div>
  )
}

export default DeleteButton