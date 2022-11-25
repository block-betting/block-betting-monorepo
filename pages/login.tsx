import type { NextPage } from 'next'
import Head from 'next/head'

import LoginComponent from '../components/Login'

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <LoginComponent />
    </>
  )
}

export default Login
