import React from 'react'
import "./Body.css"

export default function Body(prop) {
  return (
    <div className='container-fluid' id='main2'>
      <div className='row' id='r5'>
        <div className='col-6' id='div1'>
          <h1 className='heading'> Enjoy Our <br></br>Delicious Meal</h1><br></br>
          <p className='para1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore saepe sequi unde provident delectus 
            minus maxime odit eaque dicta vitae dolorem!</p>
            <a href='#'><button className='but2'> BOOK A TABLE</button></a>
        </div>
        <div className='col-6' id='div2'>
          <img src={prop.image} alt='imga' id='image'/>
        </div>
      </div>
    </div>
  )
}
