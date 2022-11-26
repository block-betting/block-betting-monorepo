import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import Web3ModalProvider from '../context/web3modal'

function BlockBetting({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ModalProvider>
        <Component {...pageProps} />
      </Web3ModalProvider>
    </>
  )
}

export default BlockBetting