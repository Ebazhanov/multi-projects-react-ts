import "./Quiz.scss";
import { useState } from "react";

const questions = [
  {
    title: "React - это ... ?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это ... ",
    variants: [
      "приложение",
      "часть приложения или страницы",
      "то, что я не знаю что такое",
    ],
    correct: 1,
  },
  {
    title: "Что такое JSX?",
    variants: [
      "Это простой HTML",
      "Это функция",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
];

function Result() {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="png"
      />
      <h2>You passed 3 answers from 10</h2>
      <button>Try again</button>
    </div>
  );
}

function Game() {
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>What is useState?</h1>
      <ul>
        <li>It is a function to store component data</li>
        <li>It is a global state</li>
        <li>Others</li>
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  return (
    <div className="Quiz">
      <Game />
      {/*      <Result />*/}
    </div>
  );
}

export default Quiz;
