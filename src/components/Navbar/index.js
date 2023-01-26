import React, { useState } from 'react'
import "./Navbar.css"

const Navbar = () => {
  const [vis, setVis] = useState(false)
  const [activePage, setActivePage] = useState()

  return (
    <>
    <div className='nav'>
      <div className='nav-name'>TUTKU EROĞLU</div>
      <div className='nav-menu'>
        <span className="menu-tags home">Anasayfa</span>
        <span className='menu-tags'>Hakkımda</span>
        <span className='menu-tags'>Becerilerim</span>
        <span className='menu-tags'>Projelerim</span>
        <span className='menu-tags'>İletişim</span>
      </div>
    </div>
    </>
  )
}

export default Navbar