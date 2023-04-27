import React from "react";

import classes from './Card.module.css';

function Card(props){
    let mob = '';
    if( props.mob ){
        mob = 'mob';
    }
    return(
        
            <div className={`project mt-30 ${mob}`} data-char={'0'+(props.idx+1)}>
                <div className="project-left">
                    <h2 className={classes['verticle-heading']}>{props.heading}</h2>
                </div>
                <div className={classes['project-middle']+' flex direction-column align-center justify-center'}>
                    <img src={props.picture} alt="aysun" className={classes.picture} />
                </div>
                <div className={classes['project-right']+' flex direction-column justify-center'}>
                    <h2 className={classes.title}>{props.title}</h2>
                    <a href={props.link} target="_blank" className={classes.link}>VISIT THE WEBSITE</a>
                </div>
            </div>
        
    )
}

export default Card;