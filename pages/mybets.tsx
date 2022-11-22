import type { NextPage } from 'next'
import Head from 'next/head'
import MyBetsComponent from '../components/MyBets'

const MyBets: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <MyBetsComponent />
    </>
  )
}

export default MyBets
