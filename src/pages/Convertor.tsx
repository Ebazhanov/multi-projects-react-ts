import React, { useEffect, useState } from "react";
import { Block } from "../components/currency-convertor/Block";
import "./../components/currency-convertor/index.scss";

function Converter() {
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);
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

  const onChangeFromPrice = (value: any) => {
    setFromPrice(value);
  };

  const onChangeToPrice = (value: any) => {
    setToPrice(value);
  };

  return (
    <div className="converter">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default Converter;
