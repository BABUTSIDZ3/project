import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Chart from "./routes/Chart";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chart" element={<Chart />} />
    </Routes>
  );
}
