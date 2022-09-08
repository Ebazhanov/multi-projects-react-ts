import React from "react";
import { Block } from "../components/currency-convertor/Block";
import "./../components/currency-convertor/index.scss";

function Converter() {
  return (
    <div className="converter">
      <Block
        value={0}
        currency="RUB"
        onChangeCurrency={(cur) => console.log(cur)}
      />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default Converter;
