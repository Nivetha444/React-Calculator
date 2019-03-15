import React from 'react';

const OutputRows =(props) => {
    return(
    <div className="OpRows">    
    <input type="text" readOnly value = { props.value }/>
    </div>
    )
}

export default OutputRows;