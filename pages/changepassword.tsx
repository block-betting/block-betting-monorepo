import type { NextPage } from 'next'
import Head from 'next/head'

import ChangePasswordComponent from '../components/ChangePassword'

const ChangePassword: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <ChangePasswordComponent />
    </>
  )
}

export default ChangePassword
