import {useState,useContext,createContext,useEffect} from 'react'

const AppContext = createContext();

const AppProvider = ({children})=>{

    <AppContext.Provider value="">{children}</AppContext.Provider>
}
export const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}