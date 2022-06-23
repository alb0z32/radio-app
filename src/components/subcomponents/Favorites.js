import React from 'react'
import { Link } from 'react-router-dom'
import nomusic from '../images/no-music.png'
import {AiTwotoneStar} from 'react-icons/ai'
const Station = ({stations}) => {
  return (
    // QITU I QET ATO TOP STATIONS
    <>
   {stations.map((station,index)=>{
    return (<div key={index} className="main-favorite">
    <img className="main-favorite-img"src={station.favicon} onError={({currentTarget})=>{currentTarget.onerror=null;currentTarget.src=nomusic}}alt="" />
    <div className="main-favorite-info">
        <Link to={`/radio/${station.stationuuid}`} className='main-station-title'>{station.name}</Link>
        <p className='main-favorite-p'>{station.country}</p>
    </div>
    <Link className='unfavorite' to={`#`}>Unfavorite<AiTwotoneStar className='unfavorite-btn'/></Link>
    </div>)
   })}
    </>
  )
}

export default Station