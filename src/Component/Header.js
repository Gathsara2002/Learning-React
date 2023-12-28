import React, { useState } from 'react'
import closeIcon from '../image/close-circle-svgrepo-com.svg'
import menuIcon from '../image/burger-simple-svgrepo-com.svg'

const Header = () => {

  const [clickClose, setClickClose] = useState(false);

  return (
    <header className='header_container'>
      <h1>GEEK <span>DEV</span></h1>
      <nav>
        <img src={menuIcon} style={{
          width: "40px",
          height: "40px",
          cursor: 'pointer'
        }}

          onClick={() => {
            setClickClose(true);
          }}
        />
        <ul style={{
          right: `${clickClose ? '-28px' : '-250px'}`,
          display: `${clickClose ? 'flex' : 'none'}`
        }}>

          <div className='header_close'>
            <img src={closeIcon} onClick={() => {
              setClickClose(false);
            }} />
          </div>

          <div className='menu'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Project</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header