import React from 'react';

function SectionTitle(props){

    return(
        <h2 className="numbered-title flex align-end">
            <span class="number text-green">{props.number}.</span>{props.title}<span class="line ml-10"></span>
        </h2>
    )

}

export default SectionTitle;