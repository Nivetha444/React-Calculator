import React from 'react';

import OutputRows from './OutputscreenRow'; 

const OutputScreens = (props) => {
    return(
    <div className="Opscreen">
    <OutputRows value = {props.question}/>
    <OutputRows value= {props.answer}/>
    </div>
    )
}

export default OutputScreens;