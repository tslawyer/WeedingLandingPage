import { useState, useEffect } from "react";
import css from "./CountDown.module.css";

const CountdownTimer = () => {
  const targetDate: Date = new Date("2026-05-05T00:00:00");

  interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

  const calculateTimeLeft = (): TimeLeft | null => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return <p>Событие наступило! 🎉</p>;

  return (
    <div className={css.countdown_wrapper}>
      <div className={css.time_card}>
        <span className={css.number}>{timeLeft.days}</span>
        <span className={css.label}>Дней</span>
      </div>
      <div className={css.time_card}>
        <span className={css.number}>{timeLeft.hours}</span>
        <span className={css.label}>Часов</span>
      </div>
      <div className={css.time_card}>
        <span className={css.number}>{timeLeft.minutes}</span>
        <span className={css.label}>Минут</span>
      </div>
      <div className={css.time_card}>
        <span className={css.number}>{timeLeft.seconds}</span>
        <span className={css.label}>Секунд</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
