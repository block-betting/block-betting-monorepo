import type { NextPage } from 'next'
import Head from 'next/head'

import SignUpComponent from '../components/SignUp'

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <SignUpComponent />
    </>
  )
}

export default SignUp
