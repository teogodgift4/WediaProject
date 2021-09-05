import React from 'react'

export default function Features() {
  async function fetchFeatures() {
    const response = await fetch('https://www.cretalive.gr/api/news-feed?_format=json&page=0');
    const features_list = await response.json();
    return features_list;
  }
  fetchFeatures().then(features_list=>{
      console.log(features_list)
  })
    return (
        <div>
            <p>features component</p>
        </div>
    )
}
