import React, { useRef, useEffect } from 'react'
import "./Contact.css"

const Contact = ({scroll}) => {
  const contactRef = useRef(null);

    useEffect(() => {
      if (scroll) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }, [scroll]);

  return (
    <div className='Contact' ref={contactRef}>

      <div className='about-header'>
        <span className='about-text'>İletişim</span>
      </div>

    </div>
  )
}

export default Contact