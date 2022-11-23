import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

var int;

var min = 0;
var seg = 0;
var tens = 0;

var timeString = "";

window.addEventListener("computeTime", async (e)=>{
  let data = new FormData();

  data.append("time", tens + (seg * 100) + (min * 6000));
  data.append("name", e.detail.nome);
  
  await fetch("https://api.kunum.com/derivadas/addTime/", {method: "POST", mode: "no-cors", body: data});
  window.location.href = "/leaderboard"
});

window.addEventListener("startTimer", ()=>{
  int = setInterval(updateTime, 10);
});

window.addEventListener("stopTimer", ()=>{
  clearInterval(int);
});

window.addEventListener("resetTimer", ()=>{
  min = 0;
  seg = 0;
  tens = 0;
})

function updateTime(){
  const t0 = performance.now();
  timeString = "";
  if (tens >= 100){
    tens = 0;
    seg ++;
    if (seg >= 60){
      seg = 0;
      min ++;
    }
  }
  if (min < 10){
    timeString += "0";
  }
  timeString += min + ":";
  if (seg < 10){
    timeString += "0";
  };
  timeString += seg + ".";
  if (tens < 10){
    timeString += "0";
  }
  timeString += tens.toString().slice(0,2);

  document.getElementById("cronometro").innerHTML = timeString;
  tens += 1 + (performance.now() - t0);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
