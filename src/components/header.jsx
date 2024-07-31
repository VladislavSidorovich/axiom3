import axiomlogo from "../assets/images/axiom_logo.svg";
import React from 'react';
import drop_down from "../assets/images/drop-down.svg";
import vector from "../assets/images/vector.svg";
import ellipse_header from "../assets/images/ellipse_header.svg";
import burger from "../assets/images/burger.svg";


const Header = () => {

    return ( 
        <>
            <header id="header" className="header">
                <img className="vector" src={vector} alt="" />
                <img className="ellipse_header" src={ellipse_header} alt="" />
                <div className="wrapper_">
                    <div className="header-nav-bar">
                        <div className="header-nav">
                            <img className="axiomlogo" src={axiomlogo} alt="" />
                            <img className="burger" src={burger} alt="" />
                            <nav>
                                <a href="">Главная</a>
                                <a href="">BTC DAO</a>
                                <a href="">Altporfolio DAO</a>
                                <a href="">Ultra DAO</a>
                                <a href="">AirDrop DAO</a>
                                <a href="">Safe DAO</a>
                                <div className="drop-down ">
                                    <a href="">Наши проекты</a>
                                    <img src={drop_down} alt="" />
                                </div>
                                <button className="button">Кошелек</button>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;