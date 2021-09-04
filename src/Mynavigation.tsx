import React from 'react'
import Donation from './Donation'

export default function Mynavigation() {
    return (
        <div className="mynavigation">
          <div className="navigation_wrapper">
            <a href="#" className="link">The Plan</a>
            <a href="#" className="link">Initiatives</a> 
            <a href="#" className="link">Join us</a>
            <Donation/>   
            </div>  
        </div>
    )
}
