import Layout from '../../components/layout';
import OpeningHours from '../../components/openingHours';
import { getPlaceById } from '../../shared/dataService';
import styles from './place.module.css';
import { GetServerSideProps } from 'next';
import { Place } from '../../shared/interfaces/Place';
import Error from 'next/error';
import Link from 'next/link';

export default function Page({errorCode, data} : { errorCode: number, data: Place}) {
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  } else {
    return (
      <Layout>
        
        <div className={styles.place}>
          <div className={styles.place__title}>
            <h3 className={styles.place__name}>{data.name}</h3>
            <Link href="/">Back to results</Link>
          </div>
          <hr />
          <div className={styles.place__details}>
            <div className={styles.place__address}>
              <p>{data.address}</p>
            </div>
            <OpeningHours data={data.openingHours}></OpeningHours>
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
