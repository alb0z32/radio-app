import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FaSearch} from 'react-icons/fa'
import Station from './Station'
const topClicksUrl =
  "https://nl1.api.radio-browser.info/json/stations/topvote/5";
  const url = "https://api.github.com/users";
const Main = () => {

  let [stations,setStations] = useState([]);

  const getStation = async () => {
    const response = await fetch(topClicksUrl);
    const user = await response.json();
    setStations(user);
  };

  useEffect(() => {
    getStation();
    
  }, []);
  return (
    <>
        <section className="main-section">
        <div className="main-section-center">
        <div className="main-search">
            <h1 className='main-title'>LISTEN IT NOW!</h1>
            <form>
                <div className="form-control">
                    <FaSearch className='main-search-logo'/>
                    <input type="text" placeholder="Search for stations..." />
                </div>
            </form>
        </div>
        {/* QITU KAN MU U SHFAQ TOP 5 MOST SEARCHED */}

        </div>
    </section>
    {stations && <div className="main-results">
            <h1 className='main-results-title'>Top Stations</h1>
            <div className="main-show-stations">
                <Station stations={stations}/>
            </div>
        </div>}
    </>

  )
}

export default Main