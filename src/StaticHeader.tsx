import React from 'react'
import MySearch from './MySearch'

export default function StaticHeader() {
    return (
        <div className="static_header">
            <div className="static_wrapper">
                <a href="#" className="link">About ACG</a>
                <a href="#" className="link">Newsroom</a>
                <a href="#" className="link">Contact us</a>
                <a href="#" className="link">Visit ACG</a>
                <MySearch/>
            </div>
        </div>
    )
}
