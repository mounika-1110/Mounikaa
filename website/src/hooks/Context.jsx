import React, { createContext } from 'react'

const Context = createContext()


export const ContextProvider =({children})=>{
    let user='virat'
    let age=35
    let email='virat@gmail.com'
    let value={user,age,email}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}


export default Context;