import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate();

  return (
    <div className="header-container">
        <div className="header-wrapper">
        <div onClick={()=>{navigate('/')}}>Home</div>
        <div onClick={()=>{navigate('/words')}}>Words</div>
        <div>Flash Cards</div>
        </div>
    </div>
  )
}

export default Header
