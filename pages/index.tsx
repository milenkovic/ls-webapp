import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { getPlaces } from '../shared/dataService';
import { GetStaticProps } from 'next';
import List from '../components/list';

export default function Home({errorCode, data = []}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <List places={data}></List>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPlaces()
  return {
    props: {
      ...data
    }
  }
}
