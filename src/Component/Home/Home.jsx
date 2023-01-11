import React from "react";
import "./Home.css";
import g1 from "../Images/g1.png"

function Home() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h4>SINCE 2010</h4>
                    <h1>A FRIENDLY MONEY EXCHANGE & TRANSFER </h1>
                    <h3>Simplifying The Complex FX Payments & Get You The Real Time Lowest Rates 24x7</h3>
                    <div className="hero-card">
                        <h3>Study Abroad Money Transfer</h3>
                        <form action="">
                            <select name="money" id="cars" className="money">
                                <option value="volvo">USD</option>
                                <option value="saab">GBP</option>
                                <option value="opel">EUR</option>
                                <option value="audi">AUD</option>
                                <option value="audi">JOY</option>
                                <option value="audi">CHF</option>
                                <option value="audi">SEK</option>
                            </select>
                            <input type="text" placeholder="Enter Amount" className="input1"/> <br />
                            <input type="text" className="input2"/> <br />
                            <button>Send Now</button>
                        </form>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={g1} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Home;