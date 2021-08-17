import React from 'react'

import './wrapperApp.css'

 const WrapperApp=(props)=> {
    return (
        <div className="container-app">
            {props.children}
        </div>
    )
}
export default WrapperApp;