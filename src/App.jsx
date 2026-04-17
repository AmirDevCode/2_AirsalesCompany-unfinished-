import { useState } from 'react'
import './App.css'

import Vacation1 from './images/topvacation1.png'
import Vacation2 from './images/topvacation2.png'
import Vacation3 from './images/topvacation3.png'
import Vacation4 from './images/topvacation4.png'

import Header from './components/header';
import FirstSection from './components/firstSection';

function App() {

  return (
    <>
      <Header/>
        <FirstSection/>
        <div className='second-section-div'>
          <div className='vacation-div-main'>
            <h2 className='vacation-h2'>Горящие туры</h2>
            <div className='vacation-div'>
              <div>
                <img className='vacation-img' src={Vacation1}></img>
              </div>

              <div>
                <img className='vacation-img' src={Vacation2}></img>
              </div>

              <div>
                <img className='vacation-img' src={Vacation3}></img>
              </div>

              <div>
                <img className='vacation-img' src={Vacation4}></img>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App