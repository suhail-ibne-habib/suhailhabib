import React from 'react';

import classes from "./WorkDetails.module.css";

function WorkDetails(props){
    
    return(
        <>
            <h2 className={classes.title}>{props.title} <span class="txt-green">@{props.workAt}</span></h2>
            <p className={classes['time-span']}>{props.time}</p>
            <div>
                <ul className={classes['work-ul']}>
                    {props.ul.map( (li,idx) => {
                        return <li key={idx}>{li}</li>
                    } )}
                </ul>
            </div>
        </>
    )
}

export default WorkDetails;