import React, { useEffect, useState } from "react";
import { Block } from "../components/currency-convertor/Block";
import "./../components/currency-convertor/index.scss";

function Converter() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rates, setRates] = useState({});

  useEffect(() => {
    fetch("https://cdn.cur.su/api/latest.json")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates);
      })
      .catch((err) => {
        console.warn(err);
        alert("Failed fetch info");
      });
  }, []);

  return (
    <div className="converter">
      <Block
        value={0}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
      />
      <Block value={0} currency={toCurrency} onChangeCurrency={setToCurrency} />
    </div>
  );
}

export default Converter;
