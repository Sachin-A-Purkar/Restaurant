import React from 'react'
import "./Third.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils,faWindowMinimize} from '@fortawesome/free-solid-svg-icons'

export default function Third(props) {
  return (
    <div>
      <div className='container-fluid' id='div3'>
        <div className='row' id='row7'>
            <div className='col-6' id='r'>
                <div className="row" id='drow1'>
                    <div className='col-6' >
                        <img src={props.img3} alt='ty' id='im1'/>
                    </div>
                    <div className='col-6' >
                        <img src={props.img4} alt='tyr' id='im2'/>
                    </div>
                </div>
                <div className="row" id='drow2'>
                <div className='col-6'>
                        <img src={props.img5} alt='tyd' id='im3'/>
                    </div>
                    <div className='col-6' >
                        <img src={props.img6} alt='tyf' id='im4'/>
                    </div>
                </div>
            </div>
            <div className='col-6' id='r2'>
              <div className='row ' id='row8'>
                <h2 id='abut'>About Us <FontAwesomeIcon icon={faWindowMinimize} style={{color: "#ff9b3d",}} id='dash'/></h2>
                <h1 id='hadi'>Welcome to <FontAwesomeIcon icon={faUtensils} style={{color: "#ff9b3d",}} id='icon3'/> Restoran</h1>
                
              </div>
              <div className='row ' id='row9'>
              <p id='p1'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
              <p id='p2'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p> 
              </div>
              <div className='row ' id='row10'>
                
                <a href='#'><button className='but3'>READ MORE</button></a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}