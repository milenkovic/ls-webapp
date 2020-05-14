import Layout from "../../components/layout";
import { getPlaceById } from "../../shared/dataService";
import styles from "./place.module.css";
import { GetServerSideProps } from "next";
import { Place } from "../../shared/interfaces/Place";
import Error from "next/error";

export default function Page({errorCode, data}) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  } else {
    return (
      <Layout>
        <div className={styles.place}>
          <h3 className={styles.place__name}>{data.name}</h3>
          <hr />
          <div className={styles.place__details}>
            <div className={styles.place__address}>
              <p>{data.address}</p>
            </div>
            <div className={styles.place__days}>
              {data.openingHours.map((item) => (
                <div className={styles.place__day}>
                  <div>{item.start} {item.end ? '- ' + item.end : ''} :</div>{" "}
                  <div className={styles.place__hours}>
                    {item.hours.length
                      ? item.hours.split(',').map((hour) => <div>{hour}</div>)
                      : "CLOSED"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const res = await getPlaceById(params.id as string);
  return {
    props: {
      ...res
    },
  };
};
