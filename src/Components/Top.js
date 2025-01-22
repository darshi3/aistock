import React, { useState } from "react";


const Top = () => {
    return (
        <header class="top-area">
            <div class="header-area">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-2">
                            <div class="logo">
                                <a href="index.html">
                                    tour<span>Nest</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-10">
                            <div class="main-menu">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <i class="fa fa-bars"></i>
                                    </button>
                                </div>
                                <div class="collapse navbar-collapse">
                                    <ul class="nav navbar-nav navbar-right">
                                        <li class="smooth-menu"><a href="#home">Home</a></li>
                                        <li class="smooth-menu"><a href="#gallery">Stock Analysis</a></li>
                                        <li class="smooth-menu"><a href="#pack">Top Exchanges</a></li>
                                        <li class="smooth-menu"><a href="#spo">About</a></li>
                                        <li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="home-border"></div>
                </div>
            </div>

        </header>
    );
};

export default Top;