import React from 'react';
//import Test from './Components/Test'; // Import the TestingMessage component
import StockDataFetcher from './Components/StockDataFetcher';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Service from './Components/Service';
import Top from './Components/Top';

const App = () => {
    return (
        <div>
            <Top />
            <Header />
            {/* <StockDataFetcher />  */}
            <Service />
           <Footer />
        </div>
    );
};

export default App;