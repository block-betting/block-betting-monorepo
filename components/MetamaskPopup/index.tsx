import Image from 'next/image'

import styles from './styles.module.scss'

import metamask from './assets/metamask.svg'
import React, { useState, useContext, useCallback, useEffect } from 'react';
import { Web3ModalContext } from '../../context/web3modal';

const MetamaskPopup = () => {
  
  const { account , connect } = useContext(Web3ModalContext);
  const [visible, setVisible] = useState<boolean>(false);

  const hasAccount = useCallback (async (): Promise<boolean> => {
    if (account) {
      return false
    } else {
      return true
    }
  }, [account]);

    
  useEffect( () => {
    hasAccount().then((result) => {
      setVisible(result)
    })
  }, [hasAccount])

  const handleConnect = useCallback(async () => {
    await connect();
    setVisible(false);
  }, [connect]);

  return (
    <>
      {visible == true ?
        <div className={styles.container}>
          <div className={styles.popupContainer}>
            <div className={styles.row}>
              <div className={styles.image}>
                <Image src={metamask} alt='Metamask' />
              </div>

              <div className={styles.text}>
                Connect your wallet so we <br />
                can continue. <span onClick={handleConnect}>Click here</span>
              </div>
            </div>
          </div>
        </div>
      : null}
    </>
  )
}

export default MetamaskPopup