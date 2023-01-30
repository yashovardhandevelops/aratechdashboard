import React, { useState } from 'react'
import AddNewClient from './AddNewClient';
// import './fontawesome.css';

function Main({ setShowForm }) {
  const [data, setdata] = useState(true);


  return (
    <div className='dashboard'>

 <div className='left_container'>

                <nav className='main-nav'>
                    <ul className='main-nav-list'>
                        <li className='main-nav-link' onClick={() => setShowForm(false)}> <i class="fa-solid fa-house"></i>&nbsp; Dashboard </li>
                        
                        <li className='main-nav-link'><i class="fa-solid fa-user"></i> &nbsp;Client Area</li>
                        <li className='main-nav-link'><i class="fa-solid fa-wallet"></i>  &nbsp; Wallet Area</li>
                        <li className='main-nav-link'><i class="fa-solid fa-chart-simple"></i>  &nbsp;  Report </li>
                        <li className='main-nav-link'><i class="fa-solid fa-user"></i>  &nbsp; Admin Area</li>
                        <li className='main-nav-link'> <i class="fa-solid fa-arrow-rotate-right"></i>&nbsp; Manage Concerns</li>
                        <li className='main-nav-link'> <i class="fa-solid fa-gear"></i> &nbsp;Manage Config.</li>
                    </ul>
                </nav>
            </div>


      <div className='right-container'>
        <div className='sub-left-dashboard'>
          <div className='first-container'>
            {/* (i) container*/}
            <div className='first-container-sub'>
              <div className='first'>From</div>
              <div className='first'>To</div>
              <div className='heighlight'>100</div>
              <div className='heighlight'>4,5000</div>
              <div className='heighlight'>5000</div>

            </div>
            <div className='first-container-sub-heading'>
              <div className='first-row'>27, Jan, 23   </div>
              <div className='first-row'>27,Jan,23   </div>
              <div className='first-row'>+0.8%</div>
              <div className='first-row'>+0.8%</div>
              <div className='btn'>➤</div>
            </div>
          </div>


          {/* (ii) container*/}
          <div className='second-container'>
            {/* (i) container*/}
            <div className='second-container-sub'>
              <div className='first active'><i class="fa-solid fa-mon ey-bill">&nbsp;</i> Total Clients <span> &nbsp; <i class="fa-solid fa-chart-line"></i></span></div>
              <h3 className='heading-tertiary'>100.00</h3>
              <div className='first'>+18 Clients</div>
            </div>

            <div className='second-container-sub'>
              <div className='first active'>Total Active Clients  <span> &nbsp; <i class="fa-solid fa-chart-line"> </i></span> </div>
              <h3 className='heading-tertiary'>100.00</h3>
              <div className='first'>+08.00</div>
            </div>


            <div className='second-container-sub'>
              <div className='first active'><i class="fa-solid fa-money-bill">&nbsp;</i>Total Users <span> &nbsp;<i class="fa-solid fa-chart-line"></i></span> </div>
              <h3 className='heading-tertiary'>5,00,000</h3>
              <div className='first'>+40,000</div>
            </div>
          </div>


          {/* (iii) container*/}
          <div className='third-container'>
            {/* (i) container*/}
            <div className='third-container-sub'>
            {/* <div className='graph'><i class="fa-solid fa-chart-column"></i></div> */}

              <div className='first-third-container-heading'>  <i class="fa-solid fa-chart-column"></i> &nbsp;  Concern Analysis</div>
              <h3 className='heading-tertiary'>1000.00</h3>
              <div className='first'>+18 Clients</div>
            </div>

   
            <div className='third-container-sub'>

              <div className='first-third-container-heading'><i class="fa-sharp fa-solid fa-file-invoice"></i> &nbsp;Account Summary</div>
              <div className='third-container-split'>

                <div class='third-container-div'>

                  <div className='graph'><i class="fa-solid fa-chart-column"></i></div>

                  <h3 className='heading-tertiary'>This Week</h3>
                  <h3 className='heading-tertiary'>100.00</h3>
                  <div className='first'>+08.00</div>
                </div>


                <div class='third-container-div'>
                <div className='graph'><i class="fa-solid fa-chart-column"></i></div>
                  <h3 className='heading-tertiary'>This Month</h3>
                  <h3 className='heading-tertiary'>100.00</h3>
                  <div className='first'>+08.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='sub-right-dashboard'>

          <div className='sub-right-btn-section'>
            <button className='btn-dashboard'>View All</button>
            <button className='btn-dashboard' onClick={() => setShowForm(true)}>Add Clients</button>

          </div>

          <div className='right-side-third-bottom-container'>
            <div className='input-search'>

              <input type='text' placeholder='Search' />

            </div>


            <div className='right-side-third-container'>

              {/* image */}
              <div className='third-co'>
                <blockquote>Aaraclousd</blockquote>
                <div className='parent-div'>
                  <div className='child'>info@Aaraclousd.com</div>
                </div>
              </div>

              <div className='third-co'>
                <blockquote>Aaraclousd</blockquote>
                <div className='parent-div'>
                  <div className='child'>info@Aaraclousd.com</div>
                </div>
              </div>

              <div className='third-co'>
                <blockquote>Aaraclousd</blockquote>
                <div className='parent-div'>
                  <div className='child'>info@Aaraclousd.com</div>
                </div>
              </div>

              <div className='third-co'>
                <blockquote>Aaraclousd</blockquote>
                <div className='parent-div'>
                  <div className='child'>info@Aaraclousd.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main