import strategies_item_one from "../assets/images/strategies_item_one.svg";
import strategies_item_one_mobile from "../assets/images/strategies_item_one_mobile.svg";
import strategies_item_two_mobile from "../assets/images/strategies_item_two_mobile.svg";
import strategies_item_three_mobile from "../assets/images/strategies_item_three_mobile.svg";
import strategies_item_fore_mobile from "../assets/images/strategies_item_fore_mobile.svg";
import strategies_item_five_mobile from "../assets/images/strategies_item_five_mobile.svg";
import strategies_item_two from "../assets/images/strategies_item_two.svg";
import strategies_item_three from "../assets/images/strategies_item_three.svg";
import strategies_item_fore from "../assets/images/strategies_item_fore.svg";
import usdt from "../assets/images/usdt.svg";
import circle from "../assets/images/circle.svg";
import React from 'react';


const Strategies = () => {

    return ( 
        <>
            <section className="strategies">
                <div className="wrapper">
                    <div className="strategies-section">
                            <div className="strategies-conteiner">
                                <div className="strategies-title">
                                <h2>Состав портфеля</h2>
                                <div className="howWeWork-conteiner-line"></div>
                            </div>
                            <div className="strategies-conteiner-items">
                                <div className="strategies-conteiner-item">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                                <div className="strategies-conteiner-item">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                            </div>
                            <div className="strategies-conteiner-items">
                                <div className="strategies-conteiner-item">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                                <div className="strategies-conteiner-item">
                                    <img src={usdt} alt="" />
                                    <h2>USDT</h2>
                                </div>
                            </div>
                        </div>
                        <img className="circle" src={circle} alt="" />
                    </div>
                    

                </div>
                
            </section>
        </>
    );
}

export default Strategies;