import React from 'react';

const Footer = () => {
    return (

        <footer class="footer-copyright">
            <div class="container">
                <div class="footer-content">
                    <div class="row">

                        <div class="col-sm-3">
                            <div class="single-footer-item">
                                <div class="footer-logo">
                                    <a href="index.html">
                                        AI<span>Dash</span>
                                    </a>
                                    <p>
                                        Best Stock Analysis
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="single-footer-item">
                                <h2>Links</h2>
                                <div class="single-footer-txt">
                                    <p><a href="#">Home</a></p>
                                    <p><a href="https://www.screener.in/screens/885655/top-100-stocks/" target='_blank'>Top 100 Stocks</a></p>
                                    <p><a href="#">contacts</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="single-footer-item">
                                <h2>Popular Stock Exchanges</h2>
                                <div class="single-footer-txt">
                                    <p><a href="https://www.nseindia.com/" target='_blank'>NSE</a></p>
                                    <p><a href="https://www.bseindia.com/" target='_blank'>BSE</a></p>
                                    <p><a href="https://www.nseindia.com/products-services/emerge-platform-about-sme" target='_blank'>BSE Emerge</a></p>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-3">
                            <div class="single-footer-item text-center">
                                <h2 class="text-left">contacts</h2>
                                <div class="single-footer-txt text-left">
                                    <p class="foot-email"><a href="#">info@tnest.com</a></p>
                                    <p>North Warnner Park 336/A</p>
                                    <p>Newyork, USA</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <hr />
                <div class="foot-icons">
                    <p>&copy; 2025 <a href="https://www.themesine.com">ThemeSINE</a>. All Right Reserved</p>
                </div>
                <div id="scroll-Top">
                    <i class="fa fa-angle-double-up return-to-top" id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                </div>
            </div>
        </footer>

    );
};

export default Footer;