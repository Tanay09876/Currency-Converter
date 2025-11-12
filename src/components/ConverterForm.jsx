import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

const geolocationApi = "https://ipapi.co/json/"; 

const ConverterForm = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const detectLocalCurrency = async () => {
      try {
        const response = await fetch(geolocationApi);
        const data = await response.json();

        console.log("Geo Info:", data);

        if (data.currency) {
          setFromCurrency(data.currency);
          
          setToCurrency(data.currency === "USD" ? "EUR" : "USD");
        }
      } catch (err) {
        console.warn("Geolocation failed:", err);
      }
    };

    detectLocalCurrency();
  }, []);

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // const getExchangeRate = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await fetch(
  //       `${API_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}`
  //     );
  //     if (!response.ok) throw new Error("Failed to fetch rate");

  //     const data = await response.json();
  //     const rate = data.conversion_rate;
  //     if (!rate) {
  //       setResult("Exchange rate not available!");
  //       return;
  //     }
  //     const converted = (rate * amount).toFixed(2);
  //     setResult(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
  //   } catch (error) {
  //     console.error("API Error:", error);
  //     setResult("Something went wrong while fetching rates!");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };



  const getExchangeRate = async () => {
  setIsLoading(true);
  try {
    const API_KEY = import.meta.env.VITE_API_KEY || "4dbc57979a8e3b10b8d80781";
    const API_URL = import.meta.env.VITE_API_URL || "https://v6.exchangerate-api.com/v6";

    const endpoint = `${API_URL}/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
    console.log("Fetching:", endpoint);

    const response = await fetch(endpoint);
    if (!response.ok) throw new Error("Failed to fetch rate");

    const data = await response.json();
    console.log("API Response:", data);

    if (data.result !== "success") throw new Error(data["error-type"]);

    const rate = data.conversion_rate;
    const converted = (rate * amount).toFixed(2);
    setResult(`${amount} ${fromCurrency} = ${converted} ${toCurrency}`);
  } catch (error) {
    console.error("API Error:", error);
    setResult("Something went wrong while fetching rates!");
  } finally {
    setIsLoading(false);
  }
};


  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  };

  return (
    <form className="converter-form space-y-6" onSubmit={handleFormSubmit}>
      <div className="form-group flex flex-col">
        <label className="form-label text-white font-medium mb-2">
          Enter Amount
        </label>
        <input
          type="number"
          className="form-input px-4 py-2 text-lg text-white bg-white/10 border border-white/50 rounded-lg outline-none"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>

      <div className="form-group form-currency-group flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="form-section flex flex-col">
          <label className="form-label text-white font-medium mb-2">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(e) => setFromCurrency(e.target.value)}
          />
        </div>

        <div
          className="swap-icon flex justify-center items-center w-10 h-10 bg-white/10 border border-white/50 rounded-full cursor-pointer hover:bg-white/30"
          onClick={handleSwapCurrencies}
        >
          <svg
            width="16"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="form-section flex flex-col">
          <label className="form-label text-white font-medium mb-2">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(e) => setToCurrency(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className={`submit-button w-full py-3 text-lg font-semibold text-white bg-white/60 rounded-lg transition ${
          isLoading ? "opacity-70 pointer-events-none" : "hover:bg-white/80"
        }`}
        disabled={isLoading}
      >
        {isLoading ? "Getting Exchange Rate..." : "Get Exchange Rate"}
      </button>

      <p className="exchange-rate-result text-white text-center text-lg font-semibold mt-6">
        {result}
      </p>
    </form>
  );
};

export default ConverterForm;
