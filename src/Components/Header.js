import React, { useState } from "react";
import axios from "axios";

const Header = () => {
    const [symbol, setSymbol] = useState("");
    const [days, setDays] = useState("");
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState("");

    const fetchStockData = async () => {
        if (!symbol || !days) {
            setError("Please enter both stock Symbol and number of days.");
            return;
        }

        try {
            setError(""); // Clear any previous errors
            const response = await axios.get(
                `http://localhost:8082/stock/test`,
                {
                    params: {
                        symbol,
                        days,
                    },
                }
            );
            setResponseData(response.data);
        } catch (err) {
            setError("Failed to fetch data. Please try again.");
            console.error(err);
        }
    };

    return (

        <>
            <section id="home" class="about-us">
                <div class="container">
                    <div class="about-us-content">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="single-about-us">
                                    <div class="about-us-txt">
                                        <h2>
                                            Stock Analysis - Quick and backed by Artificial Intelligence

                                        </h2>
                                        <div class="about-btn">
                                            <button class="about-view">
                                            <a href="#desc-tabs" class="about-view">explore now</a> 
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-0">
                                <div class="single-about-us">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section class="travel-box">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="single-travel-boxes">
                                <div id="desc-tabs" class="desc-tabs">

                                    <ul class="nav nav-tabs" role="tablist">

                                        <li role="presentation" class="active">
                                            <a href="#tours" aria-controls="tours" role="tab" data-toggle="tab">
                                                <i class="fa fa-tree"></i>
                                                Stock Analysis
                                            </a>
                                        </li>
                                    </ul>

                                    <div class="tab-content">

                                        <div role="tabpanel" class="tab-pane active fade in" id="tours">
                                            <div class="tab-para">

                                                <div class="row">
                                                    <div class="col-lg-4 col-md-4 col-sm-12">
                                                        <div class="single-tab-select-box">
                                                            <h2>Stock Symbol</h2>
                                                            <div class="travel-select-icon">
                                                                <select id="symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)}
                                                                    class="form-control ">

                                                                    <option value="default">Enter Stock Symbol</option>

                                                                    <option value="TCS.BSE">TCS</option>

                                                                    <option value="WIPRO.BSE">Wipro</option>
                                                                    <option value="RELIANCE.BSE">Reliance</option>

                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-lg-2 col-md-1 col-sm-4">
                                                        <div class="single-tab-select-box">

                                                            {/* hidden */}
                                                            <input
                                                                type="number"
                                                                id="days"
                                                                style={{ display: "none" }}
                                                            />


                                                            <h2>Last N Days</h2>
                                                            <div class="travel-select-icon">
                                                                <select id="days"
                                                                    value={days}
                                                                    onChange={(e) => setDays(e.target.value)}
                                                                    class="form-control ">

                                                                    <option value="default">Select Days</option>

                                                                    <option value="5">5</option>
                                                                    <option value="7">7</option>
                                                                    <option value="10">10</option>
                                                                    <option value="15">15</option>
                                                                    <option value="20">20</option>
                                                                    <option value="25">25</option>
                                                                    <option value="30">30</option>
                                                                    <option value="60">60</option>
                                                                    <option value="90">90</option>
                                                                    <option value="120">120</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div class="row">

                                                    <div class="clo-sm-7">
                                                        <div class="about-btn travel-mrt-0 pull-left">
                                                            <br />
                                                            <button onClick={fetchStockData} class="about-view travel-btn">
                                                                search
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div role="tabpanel" class="tab-pane active fade in" id="hotels">
                                            <div class="tab-para">
                                                <div class="row">

                                                    <div class="single-tab-select-box">
                                                        {error && (
                                                            <div style={{ color: "red", marginTop: "10px" }}>
                                                                <strong>{error}</strong>
                                                            </div>
                                                        )}

                                                        {responseData && (

                                                            <>
                                                                <h2>Result:</h2>
                                                                <pre style={{
                                                                    backgroundColor: "transparent",
                                                                    whiteSpace: "pre-wrap",
                                                                    wordWrap: "break-word",
                                                                    overflowWrap: "break-word"
                                                                }}>
                                                                    <h4>
                                                                        {responseData}
                                                                    </h4></pre>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;