import React, {useState, useEffect} from 'react';

import Product2 from './template/Product2';

import PlaceHolder from '../assets/img/floating-img.jpg';

import { getProduct2 } from '../data';

export default function SecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct2())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div class="shadow"></div>
                <div className="sidebar">
                    <img className='sidebar-float' src={PlaceHolder} alt="" />
                </div>
                <div className="main" style={{paddingLeft: 0}}>
                    
                    
                    <div className="box light">
                        <h2 className="title colored">Lorem Ipsum is simply</h2>
                        <h3 className="sub-title">Lorem Ipsum is simply</h3>
                        <div className="line"></div>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quis!</h3>
                        <div className="product-wrap">
                            {data.map( item => {
                                return(
                                    <Product2 q={item.q} title={item.title} img={item.img} />
                                )
                            } )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}