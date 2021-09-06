import React from 'react'

export default function Feature(props:any) {
    return (
        <li className="article_li" key={props.key}>
        <div className="feature_wrapper">
            <div className="img_wrap">
            <div className="article_image">
                <img src={props.image} width="306" height="188"  />
            </div>
            </div>
            <div className="article_date">{props.created}</div>
            <div className="article_title"><h3>{props.title}</h3></div>
            <div className="viewmore">< a href="#">VIEW MORE</a></div>
        </div>
        </li>
    )
}


