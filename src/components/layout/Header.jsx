import React from 'react'
import logo from "../../assets/logo.png"
import { FaWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";


function Header() {
  return (
    <div className='header'>
        <img src={logo} alt="" />
       <div className="socialBtn">
       <a className='wpBtn' target='__blank' href={import.meta.env.VITE_WP_LINK}><FaWhatsapp/>GET ID</a>
       <a className='wpBtn tgBtn' target='__blank' href={import.meta.env.VITE_TG_LINK}><FaTelegram/>GET ID</a>
       </div>
    </div>
  )
}

export default Header
