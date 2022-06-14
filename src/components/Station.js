import React from 'react'

const Station = ({stations}) => {
  console.log(stations)
  return (
    // QITU I QET ATO TOP STATIONS
    <>
   {stations.map((station,index)=>{
    return (<div key={index} className="main-station">
    <img className="main-station-img"src={station.favicon} alt="" />
    <div className="main-station-info">
        <h2 className='main-station-title'>{station.name}</h2>
        <p className='main-station-p'>{station.country}</p>
    </div>
    </div>)
   })}
    </>
  )
}

export default Station