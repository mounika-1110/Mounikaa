import Home from "./components/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contactus from "./pages/Contactus";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom"
import State from "./hooks/State";
import Form from "./hooks/Form";
import { useEffect } from "react";
import Effect from "./hooks/Effect";
import Ref from "./hooks/Ref";
import Reducer from "./hooks/Reducer";
import Context from "./hooks/Context";

function App() {
 let name='vijay'

useEffect(()=>{
  console.log("component mounted")
  return(()=>{
    console.log("component unmounted");
  })
},[])

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home name={name}/>}></Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/contact" element={<Contactus/>}/>
      <Route path="/state" element={<State/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/effect" element={<Effect/>}/>
      <Route path="/ref" element={<Ref/>}/>
      <Route path="/reducer" element={<Reducer/>}/>


    </Routes>
    {/* <Home></Home>
    <About/>
    <Service/>
    <Contactus/> */}
    </>
  )
}

export default App;
