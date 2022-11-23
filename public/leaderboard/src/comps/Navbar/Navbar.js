import React, { useState } from "react"

import CloseIcon from "../../icons/CloseIcon";
import GithubIcon from "../../icons/GithubIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import KunumIcon from "../../icons/KunumIcon";
import MenuIcon from "../../icons/MenuIcon";
import TwitterIcon from "../../icons/TwitterIcon";

import "./Navbar.css";

function Navbar(props){
    const [display, setDisplay] = useState(false);

    if (display){
        return (
            <div id="menu">
                <div id="menu-items">
                    <button className="icon-button" onClick={()=>{setDisplay(false)}}>
                        <CloseIcon/>
                    </button>
                    
                    <p><a href="https://derivadas.kunum.com/" rel="noreferrer">Versão normal</a></p>

                    <p><a href="https://speedrun.derivadas.kunum.com/">Speedrun</a></p>
                </div>

                <br/>
                
                <p>Versão beta 0.1.0</p>
                
                <br/>

                <div className="horizontaly-centered">
                    <KunumIcon/><div style={{width: "5vw"}}></div><p>Desenvolvido pela <a href="https://kunum.com" rel="noreferrer" target="_blank" className="underlined">Kunum</a></p>
                </div>
                <div className="horizontaly-centered" id="logos-div">
                    <a href="https://www.instagram.com/itskunum/" rel="noreferrer" target="_blank"><InstagramIcon/></a>
                    <a href="https://twitter.com/KunumTwt" rel="noreferrer" target="_blank"><TwitterIcon/></a>
                    <a href="https://github.com/Kunum" rel="noreferrer" target="_blank"><GithubIcon/></a>
                </div>

            </div>
        );
    }

    return (
        <nav>
            <h1>Detonadores de Derivadas</h1>
            <button className="icon-button" onClick={()=>{setDisplay(true)}}>
                <MenuIcon/>
            </button>
        </nav>
    )
}

export default Navbar;