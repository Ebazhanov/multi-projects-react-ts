import "./Quiz.scss";
import { useState } from "react";

const questions = [
  {
    title: "React - it is ... ?",
    variants: ["library", "framework", "app"],
    correct: 0,
  },
  {
    title: "What is component ...",
    variants: [
      "App",
      "part of an application or page",
      "I don't know what it is",
    ],
    correct: 1,
  },
  {
    title: "What is JSX?",
    variants: [
      "This is plain HTML",
      "This is a function",
      "This is the same HTML, but with the ability to execute JS code",
    ],
    correct: 2,
  },
];

interface ResultProps {
  correct: number;
}

function Result({ correct }: ResultProps) {
  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="png"
      />
      <h2>
        You passed {correct} answers from {questions.length}
      </h2>
      <a href="/quiz">
        <button>Try again</button>
      </a>
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
  const percentage = Math.round((step / questions.length) * 100) + 100;

  return (
    <div>
      <div className="progress">
        <div style={{ width: percentage }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li key={index} onClick={() => onClickVariant(index)}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  const onClickVariant = (index: any) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <div className="quiz-card">
      <div className="Quiz">
        {step !== questions.length ? (
          <QuizCard
            step={step}
            question={question}
            onClickVariant={onClickVariant}
          />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </div>
  );
}

export default Quiz;
