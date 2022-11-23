import React from "react";

import "./Keyboard.css";

function Key(props){
    return (
        <div onClick={()=>{
            props.handleClick(props.children);
        }} className="squared-button keyboard-key" id={"keyid-"+props.children[0]}>
            {props.children}
        </div>
    )
}

function Keyboard(props){

    function handleButtonClicks(key){
        props.handleKeyboardClicks(key);
    }

    return (
        <div id="keyboard">
            <Key handleClick={handleButtonClicks}>1</Key>
            <Key handleClick={handleButtonClicks}>2</Key>
            <Key handleClick={handleButtonClicks}>3</Key>
            <Key handleClick={handleButtonClicks}>+</Key>
            <Key handleClick={handleButtonClicks}>4</Key>
            <Key handleClick={handleButtonClicks}>5</Key>
            <Key handleClick={handleButtonClicks}>6</Key>
            <Key handleClick={handleButtonClicks}>-</Key>
            <Key handleClick={handleButtonClicks}>7</Key>
            <Key handleClick={handleButtonClicks}>8</Key>
            <Key handleClick={handleButtonClicks}>9</Key>
            <Key handleClick={handleButtonClicks}>^</Key>
            <Key handleClick={handleButtonClicks}>sen(</Key>
            <Key handleClick={handleButtonClicks}>0</Key>
            <Key handleClick={handleButtonClicks}>cos(</Key>
            <Key handleClick={handleButtonClicks}>)</Key>
            <Key handleClick={handleButtonClicks}>x</Key>
            <Key handleClick={handleButtonClicks}>{"<"}</Key>
        </div>
    )
}

export default Keyboard;