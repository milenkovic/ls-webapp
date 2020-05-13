import Head from 'next/head'
import styles from './layout.module.css'

export const siteTitle = 'Localsearch Restaurants';

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Localsearch Restaurants"/>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={styles.header}>
      </header>
      <div className={styles.content}>
        {children}
      </div>
      
    </div>
  )
}
