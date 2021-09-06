import React from 'react'
import { useEffect, useState } from 'react'
import Feature from './Feature';

export default function Latest() {
    const [data, setData] = useState<any>();

    useEffect(()=>{
            fetch('https://www.cretalive.gr/api/todays-popular?_format=json')
            .then(response => response.json())
            .then(resjon => setData(resjon))
          },[])
          
          console.log(data)
    return (
        <div>
            <ul className="thegrid">
                {data && data.map((el: { image: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, created: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined,title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; nnid: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => 
                // <div>
                // <div>{el.image}</div>
                // <div>{el.created}</div>
                // <div>{el.title}</div>
                // </div>
               
                <Feature key={el.nnid} image={el.image} created={el.created} title={el.title} />
              
                )}
                </ul>
        </div>
    )
}