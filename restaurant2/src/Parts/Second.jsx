import React, { useState } from 'react'
import "./Second.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faUser,faCartShopping,faHeadphones } from '@fortawesome/free-solid-svg-icons'

export default function Second() {
  let [p,im1]=useState(<FontAwesomeIcon icon={faUser} style={{color: "#ff9b3d",}} id='ico'/> )
  let [q,im2]=useState(<FontAwesomeIcon icon={faUtensils} style={{color: "#ff9b3d",}} id='ico'/> )
  let [r,im3]=useState(<FontAwesomeIcon icon={faCartShopping} style={{color: "#ff9b3d",}} id='ico'/> )
  let [s,im4]=useState(<FontAwesomeIcon icon={faHeadphones} style={{color: "#ff9b3d",}} id='ico'/> )
  
  let on1=()=>{
    im1(<FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} id='ico'/>)
  }
  let on2=()=>{
    im2(<FontAwesomeIcon icon={faUtensils} style={{color: "#ffffff",}} id='ico'/>)
  }
  let on3=()=>{
    im3(<FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} id='ico'/>)
  }
  let on4=()=>{
    im4(<FontAwesomeIcon icon={faHeadphones} style={{color: "#ffffff",}} id='ico'/>)
  }
  let over1=()=>{
    im1(<FontAwesomeIcon icon={faUser} style={{color: "#ff9b3d",}} id='ico'/> )
  }
  let over2=()=>{
    im2(<FontAwesomeIcon icon={faUtensils} style={{color: "#ff9b3d",}} id='ico'/> )
  }
  let over3=()=>{
    im3(<FontAwesomeIcon icon={faCartShopping} style={{color: "#ff9b3d",}} id='ico'/> )
  }
  let over4=()=>{
    im4(<FontAwesomeIcon icon={faHeadphones} style={{color: "#ff9b3d",}} id='ico'/> )
  }
  return (

    <div className='container' id='main6'>
        <div className='row'>
            <div className='box1'onMouseOver={on1} onMouseOut={over1}>
              <div id='row1' >
             {p}
              </div>
              <div id='row2'>
                <h2>Master Chief</h2>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
              </div>
            </div>
            <div className='box2'onMouseOver={on2} onMouseOut={over2}>
              <div id='row1' >
             {q}
              </div>
              <div id='row2'>
                <h2>Quality Food</h2>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
              </div>
            </div>
            <div className='box3'onMouseOver={on3} onMouseOut={over3}>
              <div id='row1' >
             {r}
              </div>
              <div id='row2'>
                <h2>Online Order</h2>
                <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
              </div>
            </div>
            <div className='box4'onMouseOver={on4} onMouseOut={over4}>
              <div id='row1' >
             {s}
              </div>
              <div id='row2'>
                <h2 >24/7 Service</h2>
                <p >Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diams</p>
              </div>
            </div>
        </div>
    </div>


  )
}
