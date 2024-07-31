import howWeWorkRectangle from "../assets/images/howWeWorkRectangle.png";
import howWeWorkRectanglemobile from "../assets/images/howWeWorkRectanglemobile.svg";
import howWeWorkRectangle_itemOne from "../assets/images/howWeWorkRectangle_itemOne.svg";
import howWeWorkRectangle_itemTwo from "../assets/images/howWeWorkRectangle_itemTwo.svg";
import ellipse_howWeWork from "../assets/images/ellipse_howWeWork.svg";
import ellipse_howWeWorkTwo from "../assets/images/ellipse_howWeWorkTwo.svg";
import youtube from "../assets/images/youtube.svg";
import x from "../assets/images/x.svg";
import telegram from "../assets/images/telegram.svg";
import instagram from "../assets/images/instagram.svg";
import facebook from "../assets/images/facebook.svg";
import up from "../assets/images/up.svg";
import safe_dao from "../assets/images/safe_dao.svg";
import safe_dao_mobile from "../assets/images/safe_dao_mobile.svg";
import drop_down from "../assets/images/drop-down.svg";
import wallet from "../assets/images/wallet.svg";
import wallet_icon from "../assets/images/wallet_icon.svg";
import close from "../assets/images/close.svg";
import React from 'react';


const HowWeWork = () => {

    return ( 
        <>
            <section className="howWeWork">
                <img className="ellipse_howWeWork" src={ellipse_howWeWork} alt="" />
                <img className="ellipse_howWeWorkTwo" src={ellipse_howWeWorkTwo} alt="" />
                <img className="up" src={up} alt="" />
                <div className="social-conteiner">
                    <div className="social">
                        <img className="facebook" src={facebook} alt="" />
                        <img className="youtube" src={youtube} alt="" />
                        <img className="instagram" src={instagram} alt="" />
                        <img className="x" src={x} alt="" />
                        <img className="telegram" src={telegram} alt="" />
                    </div>
                </div>
                <div className="wrapper">
                    <div className="howWeWork-conteiner">
                        <img className="close" src={close} alt="" />
                        <h2>Консервативная стратегия</h2>
                        <div className="howWeWork-conteiner-line"></div>
                    </div>
                    <div className="safeDao-conteiner desktop">
                        <img src={safe_dao} alt="" />
                        <div className="howWeWorkRectangle-conteiner">
                            <div className="howWeWorkRectangle-conteiner-content">
                                <div className="safe-conteiner-content">
                                    <h2>SAFE DAO</h2>
                                    <p>
                                        Консервативная стратегия: основным принципом <br /> 
                                        консервативной стратегии является распределение инвестиций <br /> 
                                        между различными криптовалютами в зависимости от их <br />
                                        потенциала и рисков. На 50% от данного портфеля приходится <br />
                                        два криптоактива входящие в ТОП-2 по своей капитализации <br />
                                        (BTC и ETH)...
                                    </p>
                                    <div className="safe-conteiner-drop-down">
                                        <img src={drop_down} alt="" />
                                        <p>Ещё</p>
                                    </div>
                                    <div className="safe-conteiner-wallet">
                                        <button className="safe-conteiner-wallet-copy"><img src={wallet_icon} alt="" /><p>0xfcA0d2D426...</p></button>
                                        <button className="safe-conteiner-wallet-img"><img src={wallet} alt="" /></button>
                                    </div>
                                </div>
                                <div className="safe-conteiner-line"></div>
                                <div className="safe-conteiner-button">
                                        <h3>ТЕКУЩАЯ ЦЕНА</h3>
                                        <div className="safe-conteiner-button-many">
                                            <h4>$</h4>
                                            <h2>500</h2>
                                        </div>
                                    <button className="invest-button">Инвестировать</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="safeDao-conteiner mobile">
                        <img src={safe_dao_mobile} alt="" />
                        <div className="howWeWorkRectangle-conteiner">
                            <div className="howWeWorkRectangle-conteiner-content">
                                <div className="safe-conteiner-content">
                                    <h2>SAFE DAO</h2>
                                    <p>
                                        Консервативная стратегия: основным принципом <br /> 
                                        консервативной стратегии является распределение инвестиций <br /> 
                                        между различными криптовалютами в зависимости от их <br />
                                        потенциала и рисков. На 50% от данного портфеля приходится <br />
                                        два криптоактива входящие в ТОП-2 по своей капитализации <br />
                                        (BTC и ETH)...
                                    </p>
                                    <div className="safe-conteiner-drop-down">
                                        <img src={drop_down} alt="" />
                                        <p>Ещё</p>
                                    </div>
                                    <div className="safe-conteiner-wallet">
                                        <button className="safe-conteiner-wallet-copy"><img src={wallet_icon} alt="" /><p>0xfcA0d2D426...</p></button>
                                        <button className="safe-conteiner-wallet-img"><img src={wallet} alt="" /></button>
                                    </div>
                                </div>
                                <div className="safe-conteiner-line "></div>
                                <div className="safe-conteiner-button">
                                        <h3>ТЕКУЩАЯ ЦЕНА</h3>
                                        <div className="safe-conteiner-button-many">
                                            <h4>$</h4>
                                            <h2>500</h2>
                                        </div>
                                    <form action="https://axiom-psi.vercel.app/">
                                        <button  className="invest-button">Инвестировать</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HowWeWork;
