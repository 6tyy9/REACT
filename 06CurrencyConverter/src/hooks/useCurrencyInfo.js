import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] =useState({}) // passing empty object so that if no value is passed still the project will not crash as we can traverse the obj with the help of a loop
     useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/{currrency}.json`)
            .then((res)=>res.json())
            .then((res)=>setData(res[currency]))
            console.log(data)
     },[currency]) // currrency is dependencny bcz whenever there is change in value of the currency we need to call th fn again
      console.log(data);
      return data
    }
    export default useCurrencyInfo;
    