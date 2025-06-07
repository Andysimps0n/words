import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";


import AddWords from "./components/AddWords"
import Home from "./components/Home";
import Header from "./components/Header";
import Words from "./pages/Words";

function App() {
  return (
      <div className="contents-wrapper">

          <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path='/words' element={<Words/>}></Route>
                <Route path='/' element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
