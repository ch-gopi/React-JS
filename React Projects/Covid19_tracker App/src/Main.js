import React from 'react'
import { useEffect, useState } from 'react'

const Main = () => {

    const[active , setActive] = useState(null);
    const[confirmed, setConfirmed] = useState(null);
    const[deaths, setDeaths] = useState(null);
    const[deltaconfirmed, setDeltaconfirmed] = useState(null);
    const[deltadeaths, setDeltadeaths] = useState(null);
    const[deltarecovered, setDeltarecovered] = useState(null);
    const[time, setTime] = useState(null);
    const[recovered, setRecovered] = useState(null);


    const getCovidData = async() => {
        try{
            const res = await fetch("https://data.covid19india.org/data.json");
            const data = await res.json();
            console.log(data.statewise[0]);
            setActive(data.statewise[0].active);
            setConfirmed(data.statewise[0].confirmed);
            setDeaths(data.statewise[0].deaths);
            setDeltaconfirmed(data.statewise[0].deltaconfirmed);
            setDeltadeaths(data.statewise[0].deltadeaths);
            setDeltarecovered(data.statewise[0].deltarecovered);
            setRecovered(data.statewise[0].recovered);
            setTime(data.statewise[0].lastupdatedtime);
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    },[]);

  return (
    <div className='Main'>
        <div className='active'>
            <h1>total active cases</h1>
            <h1>{active}</h1>
        </div>
        <div className='confirmed'>
            <h1>Total confirmed cases</h1>
            <h1>{confirmed}</h1>
        </div>
        <div className='deaths'>
            <h1>Total deaths</h1>
            <h1>{deaths}</h1>
        </div>
        <div className='deltaconfirmed'>
            <h1>Total delta confirmed cases</h1>
            <h1>{deltaconfirmed}</h1>
        </div>
        <div className='deltadeaths'>
            <h1>Total delta deaths</h1>
            <h1>{deltadeaths}</h1>
        </div>
        <div className='deltarecovered'>
            <h1>Total delta recovered</h1>
            <h1>{deltarecovered}</h1>
        </div>
        <div className='recovered'>
            <h1>Total recovered cases</h1>
            <h1>{recovered}</h1>
        </div>
        <div className='time'>
            <h1>Last updated</h1>
            <h1>{time}</h1>
        </div>
        
    </div>
  )
}

export default Main