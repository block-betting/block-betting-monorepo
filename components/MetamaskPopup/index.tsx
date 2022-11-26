import Image from 'next/image'

import styles from './styles.module.scss'

import metamask from './assets/metamask.svg'
import { useState } from 'react'

const MetamaskPopup = () => {
  const [visible, setVisible] = useState(true)

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
                can continue. <span onClick={() => setVisible(false)}>Click here</span>
              </div>
            </div>
          </div>
        </div>
      : null}
    </>
  )
}

export default MetamaskPopup