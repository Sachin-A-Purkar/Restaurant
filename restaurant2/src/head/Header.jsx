import React from 'react'
import "./Header.css"

export default function Header(prop) {
  return (
    <>
    <nav>
      <div className='conatiner-fluid'>
        <div className='row' id='r1'>
          <div className='col-2'>
          <img src={prop.img1} alt='logo' id='logo'/>
          <h1 id="loh1">Restoran</h1>
          </div>
          <div className='col-3'></div>
          <div className='col-6' id='navbar1'>
              <a href='#' >HOME</a>
              <a href='#'>ABOUT</a>
              <a href='#'>SERVICES</a>
              <a href='#'>MENU</a>
              <a href='#'>PAGES</a>
              <a href='#'>CONTACT</a>
          </div>
          <div className='col-1' id='navbar'>
            <div className='butt'><a href='#' id='buth'>BOOK A TABLE</a></div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}