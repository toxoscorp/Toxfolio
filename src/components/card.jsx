
import React from 'react';
import './card.css';

function Card({ imageSrc, title }) {
    return(
        <>
            <div className="cards">
                <img src={imageSrc} alt={title} />
                <h1>{title}</h1>
                <p>{ import.meta.env.SOME_VAR }t</p>
            </div>
        </>
    )
};

export default Card;
