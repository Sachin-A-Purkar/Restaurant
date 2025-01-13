import React from 'react'
import "./Fourth.css"

export default function Fourth(prop) {
  return (
    <div>
        <div className='container-fluid' id='main8'>
            <div className='row' id='row11'>
                <center>
                  <h3 id='headi'><img src={prop.img7} alt='fse' id='rule'/>&nbsp;Food Menu &nbsp;<img src={prop.img7} alt='fse' id='rule'/></h3>
                  <h1 id='headi2'>Most Popular Items</h1>
                </center>
            </div>
            <div className='row'id='row12'>
              <center>
              <ul className="nav nav-tabs" role="tablist" id='navt'>
                  <li className="nav-item">
                    <a className="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu1">Menu 1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-bs-toggle="tab" href="#menu2">Menu 2</a>
                  </li>
              </ul>

              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div id="home" className="container tab-pane active"><br/>
                  <h3>HOME</h3>
                  <table id='tablw'>
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img8} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img9} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* Second row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img10} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img11} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* third row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img12} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img13} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* fouth row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img14} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img15} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                  </table>
                </div>


                {/* Second tab */}
                <div id="menu1" className="container tab-pane fade"><br/>
                  <h3>Menu 1</h3>
                  <table id='tablw'>
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img8} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img9} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* Second row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img10} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img11} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* third row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img12} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img13} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* fouth row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img14} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img15} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                  </table>
                </div>


                <div id="menu2" className="container tab-pane fade"><br/>
                  <h3>Menu 2</h3>
                  <table id='tablw'>
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img8} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img9} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* Second row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img10} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img11} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* third row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img12} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img13} alt='' id='i9'/></td>
                        <td >
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                     {/* fouth row */}
                    <tr style={{height:"100px",width:"50%"}}>
                      <td>
                        <td><img src={prop.img14} alt='' id='i8'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                      <td>
                        <td><img src={prop.img15} alt='' id='i9'/></td>
                        <td>
                          <tr><h3>Chicken Burger</h3></tr>
                          <tr style={{borderTop:"1px solid grey"}}>
                            <h6>psum ipsum clita erat amet dolor justo diam</h6>
                          </tr>
                        </td>
                      </td>
                    </tr>
                  </table>
                </div>
              </div></center>
            </div>
      </div>
  </div>
  )
}
