import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
export const useSearchFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {search} = useGlobalContext()
  const controller = new AbortController();
  const getData = async ()=>{
    if(search == "") return controller.abort();
    const response = await fetch(`${url}&limit=8`,{signal:controller.signal})
    const data = await response.json()
    setData(data)
    setLoading(false)
  }
  useEffect(()=>{
    getData()
    return ()=>{
      controller.abort();
    }
  },[url,search])
  return {loading,data}
};
