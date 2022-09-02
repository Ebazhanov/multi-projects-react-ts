import "./Quiz.scss";
import { useState } from "react";

const questions = [
  {
    title: "React - it is ... ?",
    variants: ["library", "framework", "app"],
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

interface Props {
  question: {
    title: string;
    variants: string[];
    correct: number;
  };
  onClickVariant: (index: any) => void;
  step: number;
}

function QuizCard({ step, question, onClickVariant }: Props) {
  return (
    <>
      <div className="progress">
        <div style={{ width: "30%" }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const question = questions[step];

  const onClickVariant = ({ index }: any) => {
    console.log(step, index);
    setStep(step + 1);
  };

  return (
    <div className="Quiz">
      <QuizCard
        step={step}
        question={question}
        onClickVariant={onClickVariant}
      />
      {/*      <Result />*/}
    </div>
  );
}

export default Quiz;
