import type { NextPage } from 'next'
import Head from 'next/head'
import DashboardComponent from '../components/Dashboard'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <DashboardComponent />
    </>
  )
}

export default Dashboard
