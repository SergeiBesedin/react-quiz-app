import React from "react";
import classes from "./FinishedQuiz.module.css";
import Button from "../UI/Buttons/Button";
import { Link } from "react-router-dom";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === "success") {
      total++;
    }
    return total;
  }, 0);
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        {props.quiz.map((quizItem, index) => {
          const cls = [
            "fa",
            props.results[quizItem.id] === "error" ? "fa-times" : "fa-check",
            classes[props.results[quizItem.id]],
          ];
          return (
            <li key={index}>
              <strong>{index + 1}.</strong>
              {quizItem.question}
              <i className={cls.join(" ")} />
            </li>
          );
        })}
      </ul>
      <p>
        Правильных ответов: {successCount} из {props.quiz.length}
      </p>
      <div>
        <Button onClick={props.onRetry} type="primary">
          Попробовать еще раз
        </Button>
        <Link to="/">
          <Button type="success">Список тестов</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinishedQuiz;
