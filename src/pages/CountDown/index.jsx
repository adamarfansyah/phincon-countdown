/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import styles from "./countdown.module.scss";
import { Card, CustomIcon } from "../../components";
import { useState, useEffect } from "react";
import iconFacebook from "../../assets/icon-facebook.svg";
import iconInstagram from "../../assets/icon-instagram.svg";
import iconPinterest from "../../assets/icon-pinterest.svg";

const ICONS = [
  {
    id: 1,
    icon: iconFacebook,
    href: "www.facebook.com",
  },
  {
    id: 2,
    icon: iconPinterest,
    href: "www.pinterest.com",
  },
  {
    id: 3,
    icon: iconInstagram,
    href: "www.instagram.com",
  },
];

export default function CountDownPages() {
  const [searchParams] = useSearchParams();

  const date = searchParams.get("date");

  const [targetDate] = useState(new Date(date).getTime());
  const [dates, setDates] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = () => {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    const newDays = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const newHours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const newMinutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const newSeconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const countdownInterval = setInterval(updateCountdown, 1000);

    setDates({
      days: newDays,
      hours: newHours,
      minutes: newMinutes,
      seconds: newSeconds,
    });

    if (timeRemaining <= 0) {
      clearInterval(countdownInterval);
    }
  };

  useEffect(() => {
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.body}>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{`WE'RE LAUNCHING SOON`}</h1>
            <div className={styles.cards}>
              <Card number={dates.days} type={"DAYS"} />
              <Card number={dates.hours} type={"HOURS"} />
              <Card number={dates.minutes} type={"MINUTES"} />
              <Card number={dates.seconds} type={"SECONDS"} />
            </div>
          </div>
          <div className={styles.icons}>
            {ICONS.map((item) => {
              return <CustomIcon key={item.id} data={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
