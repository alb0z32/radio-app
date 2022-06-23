import React, { useState, useEffect } from "react";
import { useFetch } from "../helpers/useFetch";
import { useGlobalContext } from "../helpers/context";
import Favorites from '../subcomponents/Favorites'
let favoritesUrl = "https://nl1.api.radio-browser.info/json/stations/bytag/sport";
const Main = () => {
//   Qitu i merr favorite radios me useFetch
const {data:stations,loading} = useFetch(favoritesUrl,10)
// Nese don paginated
// const {data,loading} = usePaginatedFetch()
  return (
    <>
    <section>
        <div className="profile-container">
            <div className="profile-center">
                <div className="profile-info">
                    <h1>User Data</h1>
                    <h3>Full Name</h3>
                    <p>user@email.com</p>
                </div>
                <div className="favorites-div">
                    <h1>Favorite Radios</h1>
                    <div className="main-show-favorites">
                <Favorites stations={stations}/>
            </div>
                </div>
            </div>
        </div>

        {/* NESE DON ME BA PAGINATE(duhet me perdor usePaginatedFetch!) */}
       {/* {(!loading && data.length > 10) && <div className="pagination-bar">
        <button onClick={()=>page>0?setPage(page-1):setPage(0)} className={page>0?"prev":"prev cancel"}>Previous</button>
        {isDesktop?
          data.map(item=>{
            return <button onClick={()=>setPage(data.indexOf(item))} className="pagination-btn">{data.indexOf(item)}</button>
          }):<p className="page-p">{page} Of {data.length -1}</p>
        }
        <button onClick={()=>page<data.length -1? setPage(page+1):setPage(page)} className={page<data.length -1?"next":"next cancel"}>Next</button>
      </div>} */}
    </section>

    </>

  )
}

export default Main