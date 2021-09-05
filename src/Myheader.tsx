import React from 'react'
import Mynavigation from './Mynavigation'
import Mytitle from './Mytitle'

export default function Myheader() {
    return (
        <div className="myheader">
            <Mynavigation/>
            <Mytitle/>
            <div className="mytabs">
                <h2>Features</h2>
                <h2>Latest</h2>
                <h2>In the Media Stories</h2>
                <h2>Stories</h2>
            </div>
        </div>
    )
}
