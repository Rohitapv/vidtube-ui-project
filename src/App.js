import React from 'react'
import Navbar from './Components/Navbar/Navbar'
// import {BrowserRouter as Router} from "react-router-dom"
// import { Route, Routes} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
    {/* <Navbar/> */}
    <BrowserRouter>
    <Routes>
     <Route path='/nav'element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>

  </div>
  )
}

export default App
