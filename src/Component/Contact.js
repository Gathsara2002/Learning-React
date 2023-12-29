import React, { useState, useEffect } from 'react'
import { flushSync } from 'react-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';

const Contact = () => {

  const [mainData, setMainData] = useState([]);
  const [theme, setTheme] = useState(false);

  console.log(theme);

  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
      const response = await res.json();

      if (response) {
        setMainData(response);
      }
    }

    fetchData();

  }, []);

  return (
    <ContactContainer>
      <Header/>
      Contact Page
      <button onClick={() => { setTheme(prev => (prev ? false : true)) }}>Change Theme</button>
      <ContactBlock>
        {mainData?.map(({ id, title, body }) => (
          <Link to={`/contact/${id}`}>
            <ContactBlockUnt changeTheme={theme}>
              <img src="https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg" alt='image' />
              <h3>{title}</h3>
              {/* <h3>{body}</h3> */}
            </ContactBlockUnt>
          </Link>
        ))}
      </ContactBlock>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.main`
  width: 98vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactBlock = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: auto;
  gap: 25px;
`;

const ContactBlockUnt = styled.div`
  background-color: ${(props) => (props.changeTheme ? "black" : "bisque")};
  padding: 20px;
  border-radius: 7px;
  border: 2px solid ${(props) => (props.changeTheme ? "bisque" : "black")};
  transition: all 400ms ease-in;

  &:hover{
    background-color: inherit;
  }

  h3{
    font-size: 16px;
  }

  img{
    width: 100%;
    object-fit: contain;
  }
`;