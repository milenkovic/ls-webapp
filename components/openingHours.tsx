import styles from './openingHours.module.css'
import { OpeningHour } from '../shared/interfaces/OpeningHour';

export default function OpeningHours({ data } : {
    data: OpeningHour[]
}) {
  return (
    <div className={styles.openingHours__days}>
      {data.map((item: OpeningHour) => (
        <div className={styles.openingHours__day}>
          <div>
            {item.start} {item.end ? "- " + item.end : ""} :
          </div>{" "}
          <div className={styles.openingHours__hours}>
            {item.hours.length
              ? item.hours.split(",").map((hour) => <div>{hour}</div>)
              : "CLOSED"}
          </div>
        </div>
      ))}
    </div>
  );
}
