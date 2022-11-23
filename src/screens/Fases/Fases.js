import React, {useEffect, useState } from "react";
import Game from "../../comps/Game/Game";
import Keyboard from "../../comps/Keyboard/Keyboard";
import Navbar from "../../comps/Navbar/Navbar";
import derivar from "../../Derivative";
import "./Fases.css";

var valid_keys = ["s", "c", "0", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "x", "^", ")", "+", "-", "<"];

  function Fases(props){
    const [expression, setExpression] = useState("");

    let resposta = derivar(props.target[1]);

    useEffect(()=>{
        var keydown = (event) => {
            let keyName = event.key.toLowerCase();

            if (keyName === "dead"){
                keyName = "^";
            }
            else if (keyName === "backspace"){
                keyName = "<";
            }
        
            if (!valid_keys.includes(keyName)){
                return;
            }
        
            document.getElementById("keyid-"+keyName).classList.add("keybeingpressed");

            if (keyName === "s"){
                keyName = "sen(";
            }
            else if (keyName === "c"){
                keyName = "cos(";
            }

            if(keyName === "<"){
                setExpression(expression.slice(0, -1));
            }
            else{
                setExpression(expression+keyName);
            }
        };

        var keyup = (event) => {
            let pressedKeys = document.getElementsByClassName("keybeingpressed");
            for (let i = 0; i<pressedKeys.length; i++){
                pressedKeys[i].classList.remove("keybeingpressed");
            }
        }

        document.addEventListener('keydown', keydown);
        document.addEventListener('keyup', keyup);

        return ()=>{
            document.removeEventListener("keydown", keydown);
            document.removeEventListener("keyup", keyup);
        };
    }, [expression]);

    function handleKeyboardClicks(key){
        if(key === "<"){
            setExpression(expression.slice(0, -1));
        }
        else{
            setExpression(expression+key);
        }
    }

    function changePhase(newPhase){
        props.changePhase(newPhase);
    }

    if (expression === resposta){
        document.getElementById("break-effect-audio").play(); 
        document.getElementById("stones").classList.add("stones-animating");
        setTimeout(()=>{
            setExpression("");
            props.onContinue(resposta); 
            document.getElementById("stones").classList.remove("stones-animating");
        }, 100);
    }

    return (
        <div className="App">
            <Navbar onReset={props.onReset} changePhase={changePhase}/>
            <div id="game-area">
                <Game phase={props.phase} expression={expression} target={props.target[0]}/>
                <Keyboard handleKeyboardClicks={handleKeyboardClicks}/>
            </div>
        </div>
    )
}

export default Fases;