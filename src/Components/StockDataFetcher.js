import React, { useState } from "react";
import axios from "axios";

const StockDataFetcher = () => {
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
        <div style={{ padding: "10px", fontFamily: "Arial, sans-serif", justifyContent: "center", alignItems: "center", height: "100vh",  backgroundColor:"lightgrey",  backgroundSize: "cover",
        backgroundPosition: "center" }}> 
            <div style={{ margin:"100px", alignSelf:"center", padding: "10px", justifyContent: "center", alignItems: "center", height: "80vh", width: "150vh", backgroundColor: "lightsteelblue" }}>
            <h2>Stock Data analytics</h2>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="symbol">Stock symbol:</label>
                <input
                    type="text"
                    id="symbol"
                    value={symbol}
                    onChange={(e) => setSymbol(e.target.value)}
                    style={{ marginLeft: "10px", padding: "5px" }}
                />
            </div>
            <div style={{ marginBottom: "10px" }}>
                <label htmlFor="days">Number of Days:</label>
                <input
                    type="number"
                    id="days"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                    style={{ marginLeft: "10px", padding: "5px" }}
                />
            </div>
            <button
                onClick={fetchStockData}
                style={{
                    backgroundColor: "#007BFF",
                    color: "#FFF",
                    border: "none",
                    padding: "10px 15px",
                    cursor: "pointer",
                }}
            >
                Fetch Data
            </button>

            {error && (
                <div style={{ color: "red", marginTop: "10px" }}>
                    <strong>{error}</strong>
                </div>
            )}

            {responseData && (
                <div style={{ marginTop: "20px" }}>
                    <h3>API Response:</h3>
                    <pre style={{ backgroundColor: "#f9f9f9", padding: "10px" }}>
                        {responseData}
                        {/* {JSON.stringify(responseData, null, 2)} */}
                    </pre>
                </div>
            )}
        </div>
        </div>
    );
};

export default StockDataFetcher;
