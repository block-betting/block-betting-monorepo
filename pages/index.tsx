import type { NextPage } from 'next'
import Head from 'next/head'

import Navbar from '../components/Navbar'
import BetsExplorerContainer from '../components/BetsExplorer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <Navbar />
      <BetsExplorerContainer />
    </>
  )
}

export default Home
