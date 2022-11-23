import React from "react";

import Rock from "../../icons/Rock";

function Stone(props){
    return(
        <div className="stone">
            <p className="number-on-rock">{props.children}</p>
            <Rock type={props.type}/>
        </div>
    );
}

export default Stone;