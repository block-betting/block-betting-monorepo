import type { NextPage } from 'next'
import Head from 'next/head'
import BetsExplorerContainer from '../components/BetsExplorer'
import BetsExplorerComponent from '../components/BetsExplorer'
import Navbar from '../components/Navbar'

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
