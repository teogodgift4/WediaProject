import React from 'react'

export default function Latest() {
    async function fetchLatest() {
        const response = await fetch('https://www.cretalive.gr/api/todays-popular?_format=json');
        const latest_list = await response.json();
        return latest_list;
      }
      fetchLatest().then(latest_list=>{
          console.log(latest_list)
      })
    return (
        <div>
            latest component
        </div>
    )
}
