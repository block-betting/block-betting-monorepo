import type { NextPage } from 'next'
import Head from 'next/head'

import { FavoritesComponent } from '../components/Favorites'

const Favorites: NextPage = () => {
  return (
    <>
      <Head>
        <title>BlockBetting</title>
        <meta name="Block Betting" content="Descentralized bets and more." />
        <link rel="icon" href="../public/brand/logo" />
      </Head>

      <FavoritesComponent />
    </>
  )
}

export default Favorites
