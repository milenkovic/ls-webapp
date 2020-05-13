import Layout from '../../components/layout'
import { getPostData } from '../../shared/dataService'
import styles from './place.module.css'
import { GetServerSideProps } from 'next'
import { Place } from '../../shared/interfaces/Place'

export default function Post({
  place
}: {
  place: Place
}) {
  return (
    <Layout>
      <div className={styles.place}>
        <h3 className={styles.place__name}>{place.name}</h3>
        <hr/>
        <div className={styles.place__details}>
          <div className={styles.place__address}>
            <p>{place.address}</p>
          </div>
          <div className={styles.place__days}>
            {place.oppeningHours.map((item) => (
              <div className={styles.place__day}><div>{item.day} :</div> <div className={styles.place__hours}>{item.hours ? item.hours.map(hour => <div>{hour}</div>) : 'CLOSED'}</div></div>  
            ))}
          </div>
        </div>
      </div>
      
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  debugger;
  const place = await getPostData(params.id as string)
  return {
    props: {
      place
    }
  }
}
