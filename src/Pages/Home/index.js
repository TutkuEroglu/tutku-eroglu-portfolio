import React, { useState, useEffect } from 'react'
import "./index.css"

const Home = ({ visibility }) => {
  const [duration, setDuration] = useState(false)
  const texts = ["Arastırmaya yatkın ✔", "Ogrenmeye istekli ✔", "Tasarım yapmayı seven ✔", "Takım oyuncusu ✔", "Frontend Developer ✔"]

  /*useEffect(() => {
    if (visibility) {
      setTimeout(() => {
        setDuration(true)
      }, 1500);
    }
  }, [visibility]);*/

  return (
    <>
      <div className='Home'>
        <h2 className='info-span'>Merhaba, Ben</h2>
        <h1 className='info-span'>TUTKU EROĞLU</h1>
        <div className="scrolling-text">
          <ul className="home-scroll">
            {texts.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
          <div className="image-cards-container">
            <div className="image-card">
              <p className='card-span'>Hakkımda</p>
            </div>
            <div className="image-card">
              <p className='card-span'>Becerilerim</p>
            </div>
            <div className="image-card">
              <p className='card-span'>Projelerim</p>
            </div>
            <div className="image-card">
              <p className='card-span'>İletişim</p>
            </div>
          </div>
        
      </div>
    </>
  )
}

export default Home