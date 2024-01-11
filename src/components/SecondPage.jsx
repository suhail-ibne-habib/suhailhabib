import React, {useState, useEffect} from 'react';

import Product from './template/Product';

import { getProduct1 } from '../data';

import PlaceHolder from '../assets/img/floating-img.jpg';

export default function SecondPage(){

    const [data, setData] = useState([])

    useEffect(()=>{
        setData(getProduct1())
    }, [data])

    return(
        <>
            <div className="page full-screen background">
                <div className="shadow"></div>
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
                                    <Product price={item.price} img={item.img} />
                                )
                            } )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}