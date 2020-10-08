import React, { useEffect, useState } from "react";
import "./timer.style.css";

function App({ lang }) {
  const calculateTimeLeft = () => {
    const difference = +new Date("2021-2-5") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className="timer">
        {interval === "days" ? (
          <span>
            {lang === "en"
              ? timeLeft[interval] + "day"
              : timeLeft[interval] + "يوم"}
          </span>
        ) : null}
        {interval === "hours" ? (
          <span>
            {timeLeft[interval]}
            {"  "}
            {lang === "en" ? interval : "ساعات"}
          </span>
        ) : null}
        {interval === "minutes" ? (
          <span>
            {timeLeft[interval]}
            {"  "}
            {lang === "en" ? interval : "دقائق"}
          </span>
        ) : null}
        {interval === "seconds" ? (
          <span>
            {timeLeft[interval]}
            {"  "}
            {lang === "en" ? interval : "ثواني"}
          </span>
        ) : null}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
          <span>انعقد المؤتمر بتاريخ : 05-07-2020</span>
        )}
    </div>
  );
}

export default App;
