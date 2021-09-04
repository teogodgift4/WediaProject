import React from 'react'
import StaticHeader from './StaticHeader'
import Mynavigation from './Mynavigation'
import Mytitle from './Mytitle'

export default function Myheader() {
    return (
        <div className="myheader">
            <a href="#"><img className="logo" alt="logo" src="./logo.svg" /></a>
           <StaticHeader/>
            <Mynavigation/>
            <Mytitle/>
        </div>
    )
}
