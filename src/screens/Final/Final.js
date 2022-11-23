import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../comps/LoadingSpinner";
import Navbar from "../../comps/Navbar/Navbar";
import "./Final.css";

function Final(props){
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setLoading] = useState(false);

    function changePhase(newPhase){
        props.changePhase(newPhase);
    }

    useEffect(()=>{
        const event = new Event('stopTimer');
        window.dispatchEvent(event);
    }, []);
    
    if (isLoading){
        return (
            <div className="App">
                <Navbar onReset={props.onReset} changePhase={changePhase}/>
                <LoadingSpinner/>
            </div>
        );
    }

    return (
        <div className="App">
            <Navbar onReset={props.onReset} changePhase={changePhase}/>
            <div className='squared-div small-text' id="outro-text-div">
                <p>
                    Finalizado!
                </p>
                <p>Por favor digite seu nome:</p>
                <input id="name-input" type="text" onChange={(e)=>{setName(e.target.value)}}/>
                <p className="small-text">{message}</p>
                <br/>
                <button className="squared-button" style={{fontSize: "3vmin"}} onClick={()=>{
                    if (name.length < 3){
                        setMessage("Nome muito curto");
                        return;
                    }
                    else if (name.length > 12){
                        setMessage("Nome muito longo");
                        return;
                    }
                    setLoading(true);
                    const event = new CustomEvent("computeTime", {detail: {nome: name}});
                    window.dispatchEvent(event);
                }}>Computar tempo</button>
            </div>
        </div>
    )
}

export default Final;