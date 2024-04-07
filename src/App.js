import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Video from './Pages/Video/Video'
// import {BrowserRouter as Router} from "react-router-dom"
// import { Route, Routes} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
       <Navbar setSidebar={setSidebar}/>  
      <BrowserRouter>
        <Routes>
          {/* <Route path='/nav' element={<Navbar />} /> */}
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video />} />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </div>
  )
}

export default App
