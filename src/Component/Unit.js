import React from 'react'

const Unit = ({ imageUrl, name, city, position }) => {
    return (
        <div className='unit_container'>
            <img src={imageUrl} alt='image' />
            <h3>{name}</h3>
            <p>
                <span>{city}</span>
                <span>{position}</span>
            </p>
        </div>
    )
}

export default Unit