import React from "react";

import "./Game.css";

function Game(props){
    return (
        <div id="game-div">
            <div id="current-expression">
                <div className="horizontaly-centered">
                    <p>f(x) = </p>
                    <div id="stones">
                        {props.target}
                    </div>
                </div>
            </div>
            <div id="expression-div">
                {props.expression}
            </div>
            <div id="cronometro">
            </div>
        </div>
    );
}

export default Game;