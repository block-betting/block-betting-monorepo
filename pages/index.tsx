import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

import BetsExplorer from './BetsExplorer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <Navbar />
      <BetsExplorer />
    </>
  )
}

export default Home
