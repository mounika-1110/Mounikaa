import React from 'react'
import { useState } from 'react'


const Form = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData((prevData)=>(
            {...prevData,[name]:value}
        ))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('FormData :',formData);  
    }
  return (
    <div>
        <h1>Controlled Form</h1>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={formData.name} onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name='email' value={formData.email} onChange={handleChange} />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}


export default Form
