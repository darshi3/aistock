
```markdown
# Stock Analysis Frontend

This is the React-based frontend of the Stock Analysis application. It communicates with the backend via RESTful APIs to provide AI-generated analysis of Indian stocks based on historical data.

Users can select a stock and specify the number of days for analysis. The frontend sends the input to the backend, which integrates with the Alpha Vantage API to retrieve stock data and utilizes OpenAI to generate insightful stock analysis.

## Technologies Used

- React v19.0.0
- React DOM v19.0.0
- React Scripts v5.0.1
- Node.js v20.17.0
- NPM v11.0.0

## Getting Started

### Clone the repository
```bash
git clone https://github.com/darshi3/aistock.git
```

### Navigate into the project directory
```bash
cd aistock
```

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Backend Integration

Make sure the backend service (Java Spring Boot) is running. Update the API URLs in your frontend code if needed, so they correctly point to your backend.

Backend Repo: [Stock Analysis Backend](https://github.com/darshi3/StockAnalysisBackend)

## Features

- User input for stock and days
- Fetches stock data via Alpha Vantage API
- Sends data to OpenAI for stock analysis generation
- Displays analysis in a user-friendly interface

```

---
📸 Screenshots
You can add screenshots or a short GIF here of how the app looks or works.
