import type { NextPage } from 'next'
import Head from 'next/head'

import PasswordRecoveryComponent from '../components/PasswordRecovery'

const PasswordRecovery: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <PasswordRecoveryComponent />
    </>
  )
}

export default PasswordRecovery
