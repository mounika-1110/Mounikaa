import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


const Todos = () => {
    const [todos,setTodos] =useState([])
    const [task,setTask]=useState('')
    const[editing,setEditing]=useState(null)


    const fetchTodos=async()=>{
        const response=await axios.get('http://localhost:3000/get')
        setTodos(response.data)
    }


    useEffect(()=>{
        fetchTodos()
    },[])


    const handleAddorEdit=async()=>{}
    const handleDelete=async()=>{}
    const handleToggleComplete=async()=>{}




  return (
    <div>
        <h1>Todos</h1>
        <form onSubmit={handleAddorEdit}>
            <input type="text" placeholder='enter todo' value={task} onChange={(e)=>setTask(e.target.value)} />
            <button>{editing?"Update":"Add Todo"}</button>
        </form>
        <ul>
            {todos.map((todo)=>(
                <li key={todo._id}>
                    <span onClick={handleToggleComplete}>
                        {todo.task}
                    </span>
                    <div>
                        <button onClick={()=>{
                            setTask(todo.task);
                            setEditing(todo)
                        }}>Edit</button>
                        <button onClick={()=>handleDelete(todo._id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
  )
}


export default Todos
