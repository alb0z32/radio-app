import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import {FaSearch} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Station from './Station'
import { useSearchFetch } from "./useSearchFetch";
const topClicksUrl =
  "https://nl1.api.radio-browser.info/json/stations/topvote/5";
const searchUrl = "https://nl1.api.radio-browser.info/json/stations/search?name="
  // const url = "https://api.github.com/users";
const Main = () => {
  const {search,setSearch} = useGlobalContext()
  const {data} = useFetch(topClicksUrl)
const {data:searchResults,loading} = useSearchFetch(`${searchUrl+search}`);
  return (
    <>
        <section className="main-section">
        <div className="main-section-center">
        <div className="main-search">
            <h1 className='main-title'>LISTEN IT NOW!</h1>
            <form>
                <div className="form-control">
                    <FaSearch className='main-search-logo'/>
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search for stations..." />
                </div>
            </form>
        </div>
        {/* QITU KAN MU U SHFAQ TOP 5 MOST SEARCHED */}
         {!loading && <div className="search-results-div">
          {searchResults.map((result,index)=>{
           return <div key={index} className="search-result">
            <Link onClick={()=>setSearch("")} className="search-link" to={`/radio/${result.stationuuid}`}>{result.name}</Link>
          </div>
          })}

          </div>}
        </div>
    </section>
    {data && <div className="main-results">
            <h1 className='main-results-title'>Top Stations</h1>
            <div className="main-show-stations">
                <Station stations={data}/>
            </div>
        </div>}
    </>

  )
}

export default Main