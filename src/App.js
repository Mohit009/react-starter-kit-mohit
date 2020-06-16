import React from "react";
import "./styles.css";
import ReceiptsContainer from "./components/receiptsContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Expense Report</h1>
      <ReceiptsContainer />
    </div>
  );
}
