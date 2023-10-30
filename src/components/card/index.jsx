/* eslint-disable react/prop-types */
import styles from "./card.module.scss";

export default function Card({ number, type }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.container}>
        <div className={styles.boxUp}></div>
        <div className={styles.boxBottom}>
          <h1 className={styles.titleCard}>{number}</h1>
        </div>
      </div>
      <div>
        <p className={styles.types}>{type}</p>
      </div>
    </div>
  );
}
