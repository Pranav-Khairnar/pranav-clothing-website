import React from "react";
import './form-input-style.scss'

const FormInput = ({label, ...properties}) => {
    
    return(
        <div className="group" >
            < input className="form-input" {...properties}/>
            {label && (
                <label 
                    className={`${
                        properties.value.length ? 'shrink':''
                    } form-input-label`}>
                        {label}
                    </label>

            )}
        </div>
    )
}

export default FormInput;