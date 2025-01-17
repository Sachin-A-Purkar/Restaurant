import React, { useState } from 'react'
import "./Fifth.css"

export default function Fifth(prop) {
  let [a,abc]=useState("");
  let [b,def]=useState("");
  let [c,ghi]=useState("");
  let [d,jkl]=useState("");
  let [e,mno]=useState("");

  let xyz=(e)=>{
    e.preventDefault()
    document.getElementById("n").innerHTML=` ${a}`
    document.getElementById("e").innerHTML=`${b}`
    document.getElementById("d").innerHTML=` ${c}`
    document.getElementById("m").innerHTML=` ${d}`
    document.getElementById("o").innerHTML=` ${e}`
  }
  return (
    <div>
      <div className='container-fluid' id='main12'>
        <div className='row' id='row13'>
            <div className='col-6' id='form1'>
              <h1>Recipt</h1>
                <table >
                  <tr>
                    <td>Name</td>
                    <td ><h3 id='n'></h3></td>
                  </tr>
                  <tr>
                    <td>email</td>
                    <td ><h3 id='e'></h3></td>
                  </tr>
                  <tr>
                    <td>Date & Time</td>
                    <td ><h3 id='d'></h3></td>
                  </tr>
                  <tr>
                    <td>No of person</td>
                    <td ><h3 id='m'></h3></td>
                  </tr>
                  <tr>
                    <td>Request</td>
                    <td ><h3 id='o'></h3></td>
                  </tr>
                </table>
            </div>
            <div className='col-6' id='form2'>
                <div className='for1'>
                    <h2 id='heading5'>Reservation &nbsp;&nbsp;<img src={prop.img16} alt='g' s/></h2>
                    <h1 id='heading6'>Book A Table Online</h1>
                </div>
                <div className='for2'>
                <form onSubmit={xyz}>
                    <div className="row" id='ro1'>
                      <div className="col">
                        <input type="text" className="form-control" placeholder="Your Name" name="namec" onChange={(e)=>abc(e.target.value)}/>
                      </div>
                      <div class="col">
                      <input type="email" className="form-control" placeholder="Your email" name="email" onChange={(e)=>def(e.target.value)}/>
                      </div>
                    </div>
                    <div className="row" id='ro2'>
                      <div className="col">
                        <input type="datetime-local" id="birthdaytime" placeholder='Select Date & Time' name="birthdaytime" className="form-control" onChange={(e)=>ghi(e.target.value)}/>
                      </div>
                      <div class="col">
                        <select class="form-select" id="sel1" name="sellist1" placeholder="Select Number Of Person" onChange={(e)=>jkl(e.target.value)}>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                    </div>
                    <div className="row" id='ro3'>
                    <input type='text' class="form-control"  id="comment" name="text" placeholder='Special Request' onChange={(e)=>mno(e.target.value)}></input>
                    </div>
                    <div className="row" id='ro3'>
                        <button type="submit" className='but5'>Book</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
