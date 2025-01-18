import React ,{useState}from "react";
import "./Sixth.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart,faThumbsUp} from '@fortawesome/free-solid-svg-icons'


export default function Sixth(prop){
  let [r,abc]=useState(<FontAwesomeIcon icon={faThumbsUp} />)
  let like=()=>{
    abc(<FontAwesomeIcon icon={faHeart} style={{color: "#ff0000",}} />)
  }
  let dislike=()=>{
    abc(<FontAwesomeIcon icon={faThumbsUp} />)
  }
  const chef =[
    {
      name:"Rahul Pansare",position:"Manager",image:require("../images/img/team-1.jpg")
    },
    {
      name:"Sumit Rao",position:"Head Chef",image:require("../images/img/team-2.jpg")
    },
    {
      name:" Aadi Raut",position:"Assistant Chef",image:require("../images/img/team-3.jpg")
    },
    {
      name:"Amit Patil",position:"Assistant Chef",image:require("../images/img/team-4.jpg")
    },
  ];
  return (
    <div>
      <div className='conatiner-fluid' id='main9'>
        <div className='row' id='rw2'>
                <center>
                  <h3 id='headi'><img src={prop.img7} alt='fse' id='rule'/>&nbsp;Food Menu &nbsp;<img src={prop.img7} alt='fse' id='rule'/></h3>
                  <h1 id='headi2'>Most Popular Items</h1>
                </center>
        </div>
        <div className='row' id='rw1'>
          {chef.map((chef,index)=>(
            <div className='col-2' id="box5" key={index}>
              <div className="timg">
                <center> 
                  <img src={chef.image} alt='fr' id='imt1'/>
                  <div className="social-icons">
                  <span onClick={like} onDoubleClick={dislike}>{r}</span>
                </div>
                </center>
              </div>
              <div className="tde">
                <center>
                  <h2>{chef.name}</h2>
                  <p>{chef.position}</p>
              </center>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


