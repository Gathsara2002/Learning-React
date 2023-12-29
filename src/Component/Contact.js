import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
    <div>Contact Page
      {mainData?.map(({ id, title, body }) => (
        <Link to={`/contact/${id}`}>
          <div>
            <h3>{title}</h3>
            <h3>{body}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Contact