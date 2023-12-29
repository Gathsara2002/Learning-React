import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Contact = () => {

  const [mainData, setMainData] = useState([]);

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
    <ContactContainer>Contact Page
      <ContactBlock>
        {mainData?.map(({ id, title, body }) => (
          <Link to={`/contact/${id}`}>
            <ContactBlockUnt>
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
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: auto;
  gap: 25px;
`;

const ContactBlockUnt = styled.div`
  background-color: bisque;
  padding: 20px;
  border-radius: 7px;
  border: 1px solid black;
  transition: all 400ms ease-in;

  &:hover{
    background-color: inherit;
  }
`;