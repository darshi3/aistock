import React, { useState } from "react";

const Service = () => {
    return (

        <section id="service" class="service">
            <div class="container">

                <div class="service-counter text-center">

                    <div class="col-md-4 col-sm-4">
                        <div class="single-service-box">
                            <div class="service-img">
                                <img src="assets/images/service/s1.png" alt="service-icon" />
                            </div>
                            <div class="service-content">
                                <h2>
                                    <a href="#">
                                        AI Integrated
                                    </a>
                                </h2>
                                <p>Providing precise analysis with minimal disruption for optimal decision-making.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                        <div class="single-service-box">
                            <div class="service-img">
                                <img src="assets/images/service/s2.png" alt="service-icon" />
                            </div>
                            <div class="service-content">
                                <h2>
                                    <a href="#">
                                        Time-Series Data
                                    </a>
                                </h2>
                                <p>Leveraging time-series data for accurate forecasting and informed decision-making.</p>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-sm-4">
                        <div class="single-service-box">
                            <div class="statistics-img">
                                <img src="assets/images/service/s3.png" alt="service-icon" />
                            </div>
                            <div class="service-content">

                                <h2>
                                    <a href="#">
                                        Market Trends
                                    </a>
                                </h2>
                                <p>Unlocking key market trends for better investment strategies and smarter decisions.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>




    );
};

export default Service;