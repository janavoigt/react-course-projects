import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Question({ indexKey, onSelectAnswer, onSkipAnswer }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorretc: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorretc !== null) {
    timer = 2000;
  }

  function handleSelectedAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorretc: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorretc: QUESTIONS[indexKey].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorretc !== null) {
    answerState = answer.isCorretc ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[indexKey].text}</h2>
      <Answers
        answers={QUESTIONS[indexKey].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelected={handleSelectedAnswer}
      />
    </div>
  );
}
