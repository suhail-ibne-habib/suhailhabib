import React,{useEffect, useState} from 'react';

import setCookie from '../hooks/setCookie';
import getCookies from '../hooks/getCookies';

import Box from '../components/Box'

import source from '../data'

export default function Boxes(){

    const [data, setData] = useState([])
    const [cookieData, setCookieData] = useState([])

    useEffect(()=>{

        const cookieArray = getCookies();
        setCookieData(cookieArray);

    }, [])

    useEffect( ()=>{
        if( cookieData.length === 0 ){
            setData(source);
            data.map( item=>{
                return setCookie(item.title, item.speed)
            })
        }
    }, [cookieData, data])

    return(
        <>
            <div className="grid-3" id="boxes">
                {cookieData.map((item, idx)=>{
                    return <Box key={idx} title={item.title} speed={item.speed} />
                })}
            </div>
        </>
    )
}