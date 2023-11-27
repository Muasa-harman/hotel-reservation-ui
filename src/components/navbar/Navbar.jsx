import React from 'react'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='navContainer'>
        <span className='logo'>H@rtman Dev <br/> Hotel-Reservation UI</span>
        <div className="navItems">
          <button className="navButton">Registration</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
