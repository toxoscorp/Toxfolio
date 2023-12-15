import React, { useEffect } from 'react'
import './TitleSub.css'

import Typewriter from 'typewriter-effect';

function TitleSub({ title, subtitle, direction }) {

    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty('--title-direction', direction);
        root.style.setProperty('--title-flex-direction', direction === 'left' ? 'baseline' : 'end');
    }, [])

    return (
        <>
            <div className='titleSub'>
                {direction === 'left' ? <div className='title__line'></div> : null}
                <div className='titles'>
                    <h1>{title}</h1>
                    <h2><Typewriter
                        options={{
                            strings: subtitle.split(','),
                            autoStart: true,
                            loop: true,
                        }}/>
                    </h2>
                </div>
                {direction === 'right' ? <div className='title__line'></div> : null}
            </div>
        </>
    )
}

export default TitleSub