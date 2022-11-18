import Image from 'next/image'

import styles from './styles.module.scss'

import disconnect from './assets/disconnect.svg'
import settings from './assets/settings.svg'
import logo from './assets/logo.svg'
import bets from './assets/bets.svg'
import mybets from './assets/mybets.svg'
import favorites from './assets/favorites.svg'
import { useState } from 'react'

const Sidebar = () => {
  const [selected] = useState(true)

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.topContainer}>
          <div className={styles.logo} onClick={() => window.open('/', '_self')}>
            <Image src={logo} alt='Logo' style={{cursor: 'pointer'}}/>
          </div>

          <div className={selected == true ? styles.optionContainerSelected : styles.optionContainer}>
            <div className={styles.image}>
              <Image src={bets} alt='Bets' />
            </div>

            <div className={styles.text}>
              Bets
            </div>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.image}>
              <Image src={mybets} alt='Bets' />
            </div>

            <div className={styles.text}>
              My Bets
            </div>
          </div>

          <div className={styles.optionContainer}>
            <div className={styles.image}>
              <Image src={favorites} alt='Bets' />
            </div>

            <div className={styles.text}>
              Favorites
            </div>
          </div>
        </div>

        <div className={styles.optionsContainer}>
          <div className={styles.settingsContainer} onClick={() => window.open('/settings', '_self')}>
            <div className={styles.settingsImage}>
              <Image src={settings} alt='Settings' />
            </div>

            <div className={styles.text}>
              Settings
            </div>
          </div>

          <div className={styles.disconnectContainer} onClick={() => window.open('/', '_self')}>
            <div className={styles.disconnectImage}>
              <Image src={disconnect} alt='Disconnect' />
            </div>

            <div className={styles.text}>
              Disconnect
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar