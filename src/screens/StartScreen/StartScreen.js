import React from "react";
import Navbar from "../../comps/Navbar/Navbar";

import './StartScreen.css';

function StartScreen(props){
    function changePhase(newPhase){
        props.changePhase(newPhase);
    }
    
    return (
        <div className="App">
            <Navbar changePhase={changePhase}/>

            <div className='squared-div' id="intro-text-div">
            <p>SPEEDRUN!</p>
            <p>
                No modo speedrun você precisará derivar as funções
                o mais rápido possível para entrar no ranking do 
                <a href="https://speedrun.derivadas.kunum.com/leaderboard" className="underlined"> top 10 derivadores mais rápidos</a>
            </p>
            </div>

            <button className='squared-button' id="start-button" onClick={()=>{
                const event = new Event('startTimer');
                window.dispatchEvent(event);
                props.onContinue()
            }}>
                Começar!
            </button>
        </div>
    )
}

export default StartScreen;