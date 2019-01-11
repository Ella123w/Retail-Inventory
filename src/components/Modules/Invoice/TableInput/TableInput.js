import React from 'react';

const tableInput = (props) => {
    
    return (
        
            <div className="column field is-4">
                <div className="control">
                    <label className= "label">{props.labelTitle}</label>
                    <input label={props.declaredValue} className="input" type="text" onChange = {props.valueChanged} value={props.declaredValue} required/>
                </div>
            </div>            
    
    );

};

export default tableInput;