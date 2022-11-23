import React, { useEffect, useState } from "react";
import './App.css';
import LoadingSpinner from "./comps/LoadingSpinner";
import Navbar from "./comps/Navbar/Navbar";

function App(){
    const [isLoaded, setLoaded] = useState(false);
    const [times, setTimes] = useState();

    useEffect(()=>{
      fetch("https://api.kunum.com/derivadas/leaderboard/")
      .then((obj)=>{
        return obj.json();
      })
      .then((obj)=>{
        let tempos = obj.tempos;
        let positions = 1;

        let leaders = [];

        tempos.forEach(e => {
          let secs = Math.floor(e.tempo / 100);
          let mins = Math.floor(secs / 60);
          secs -= mins * 60;
          let tens = e.tempo % 100;

          if (secs < 10){
            secs = "0" + secs;
          }
          if (tens < 10){
            tens = "0" + tens;
          }

          leaders.push(<p>{positions} - {e.nome} ({mins + ":" + secs + "." + tens})</p>);
          
          positions++;
        });

        setTimes(leaders);
        setLoaded(true);
      });
    }, []);

    if (!isLoaded){  
      return (
        <div className="App">
          <Navbar/>
          <LoadingSpinner/>
        </div>
      )
    }

    return (
      <div className="App">
        <Navbar/>
        <div className='squared-div' id="outro-text-div">      
          {times}
        </div>
        <br/>
        <a href="https://speedrun.derivadas.kunum.com/">Voltar</a>
      </div>
    )
}

export default App;
