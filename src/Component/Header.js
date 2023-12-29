import React, { useState } from 'react'
import closeIcon from '../image/close-circle-svgrepo-com.svg'
import menuIcon from '../image/burger-simple-svgrepo-com.svg'
import { Link } from 'react-router-dom';

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
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/about'}>About</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
              <Link to={'/project'}>Project</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header