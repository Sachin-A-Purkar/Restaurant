import React, { useState } from 'react'
import "./Second.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faUser,faCartShopping,faHeadphones } from '@fortawesome/free-solid-svg-icons'

export default function Second() {
  let [p,im1]=useState(<FontAwesomeIcon icon={faUser} style={{color: "#ff9b3d",}} id='ico'/> )
  let [q,im2]=useState(<FontAwesomeIcon icon={faUtensils} style={{color: "#ff9b3d",}} id='ico'/> )
  let [r,im3]=useState(<FontAwesomeIcon icon={faCartShopping} style={{color: "#ff9b3d",}} id='ico'/> )
  let [s,im4]=useState(<FontAwesomeIcon icon={faHeadphones} style={{color: "#ff9b3d",}} id='ico'/> )
  