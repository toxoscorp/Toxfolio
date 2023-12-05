
import React from 'react';
import './card.css';

function Card({ imageSrc, title }) {
    return(
        <>
            <div className="cards">
                <img src={imageSrc} alt={title} />
                <h2>{title}</h2>
            </div>
        </>
    )
};

export default Card;
