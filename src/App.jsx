import { useState } from "react";
import ConverterForm from "./components/ConverterForm";
import "./App.css";

function App() {
  return (
    <div className="currency-converter">
      <h2 className="converter-title">Currency Converter</h2>
      <ConverterForm />
    </div>
  );
}

export default App;
