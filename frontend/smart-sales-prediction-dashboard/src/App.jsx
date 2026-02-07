import { useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import "./App.css";

function App() {
  const [year, setYear] = useState(2018);
  const [month, setMonth] = useState(6);
  const [category, setCategory] = useState("Furniture");
  const [region, setRegion] = useState("West");
  const [prediction, setPrediction] = useState(null);
  const [history, setHistory] = useState([]);

  const handlePredict = async () => {
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/predict?year=${year}&month=${month}&category=${category}&region=${region}`
      );

      const value = res.data.predicted_sales;

      setPrediction(value);

      setHistory([
        ...history,
        {
          label: `${year}-${month}`,
          sales: value,
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1>📊 Sales Intelligence Dashboard</h1>

      <input value={year} onChange={(e) => setYear(e.target.value)} />
      <input value={month} onChange={(e) => setMonth(e.target.value)} />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Furniture</option>
        <option>Office Supplies</option>
        <option>Technology</option>
      </select>

      <select value={region} onChange={(e) => setRegion(e.target.value)}>
        <option>West</option>
        <option>East</option>
        <option>Central</option>
        <option>South</option>
      </select>

      <br />

      <button onClick={handlePredict}>Predict Sales</button>

      {prediction && (
        <p className="result">
          Predicted Sales: ${prediction.toFixed(2)}
        </p>
      )}

      {history.length > 0 && (
        <LineChart width={600} height={300} data={history}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" />
        </LineChart>
      )}
    </div>
  );
}

export default App;
