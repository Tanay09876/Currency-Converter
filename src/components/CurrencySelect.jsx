import React from "react";

const currencyCodes = [
  "AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN",
  "BAM","BBD","BDT","BGN","BHD","BIF","BMD","BND","BOB","BOV",
  "BRL","BSD","BTN","BWP","BYN","BZD","CAD","CDF","CHF","CLP",
  "CNY","COP","COU","CRC","CUP","CVE","CZK","DJF","DKK","DOP",
  "DZD","EGP","ERN","ETB","EUR","FJD","FKP","GBP","GEL","GHS",
  "GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HTG","HUF","IDR",
  "ILS","INR","IQD","IRR","ISK","JMD","JOD","JPY","KES","KGS",
  "KHR","KMF","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD",
  "LSL","LYD","MAD","MDL","MGA","MKD","MMK","MNT","MOP","MRU",
  "MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK",
  "NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PYG",
  "QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SDG","SEK",
  "SGD","SHP","SLE","SOS","SRD","SSP","STN","SVC","SYP","SZL",
  "THB","TJS","TMT","TND","TOP","TRY","TTD","TVD","TWD","TZS",
  "UAH","UGX","USD","UYU","UZS","VED","VES","VND","VUV","WST",
  "XAF","XCD","XOF","XPF","YER","ZAR","ZMW","ZWL"
];

const CurrencySelect = ({ selectedCurrency, handleCurrency }) => {
  const countryCode = selectedCurrency.substring(0, 2); // first 2 letters (e.g. "US" from "USD")

  return (
    <div className="currency-select flex items-center gap-2">
      <img
        src={`https://flagsapi.com/${countryCode}/flat/64.png`}
        alt={`${selectedCurrency} flag`}
        width="32"
        height="32"
        onError={(e) => (e.target.style.display = "none")} // hides broken flag images
      />
      <select
        onChange={handleCurrency}
        className="currency-dropdown border rounded px-2 py-1"
        value={selectedCurrency}
      >
        {currencyCodes.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencySelect;
