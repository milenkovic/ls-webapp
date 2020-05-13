import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getPlaces } from '../shared/dataService'
import { GetStaticProps } from 'next'
import { Place } from '../shared/interfaces/Place'
import List from '../components/list'

export default function Home({
  places
}: {
  places: Place[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <List places={places}></List>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const places = getPlaces()
  return {
    props: {
      places
    }
  }
}
