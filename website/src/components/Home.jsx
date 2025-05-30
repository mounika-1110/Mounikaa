import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({name}) => {
  return (
    <div>
   <h1>Welcome {name}</h1>
<Link to="/state">State</Link><br></br>
<Link to="/form">Controlled Form</Link><br></br>
<Link to="/effect">Effect</Link><br></br>
<Link to="/ref">Ref</Link><br></br>
<Link to="/reducer">Reducer</Link><br></br>


    </div>
  )
}

export default Home //rafce
//react arrow function component export
