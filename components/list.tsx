import Link from 'next/link'
import styles from './list.module.css'
import { GetStaticProps } from 'next';

export default function List({places}) {
  return (
    <div className={styles.container}>
      <input type="text" name="search" placeholder="Search places" className={styles.search} autoComplete="off"/>
      <div className={styles.results}>
        {places.map(({ id, name }) => (
            <Link href="/places/[id]" as={`/places/${id}`} key={id}>
              <a className={styles.place}>{name}</a>
            </Link>
        ))}
      </div>  
    </div>
  )
}