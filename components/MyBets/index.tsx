import Image from 'next/image'
import { useState } from 'react'

import CardGrid from '../Dashboard/components/CardGrid'
import MyBetsSidebar from './components/Sidebar'

import styles from './styles.module.scss'

import create from './assets/create.svg'
import close from './assets/close.svg'

const MyBetsComponent = () => {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <MyBetsSidebar />

      <div className={styles.column}>
        <div className={styles.createBetContainer}>
          <div className={styles.button} onClick={() => setActive(!active)}>
            <div className={styles.image}>
              <Image src={create} alt='Create Bet' />
            </div>

            <div>
              Create Bet
            </div>          
          </div>
        </div>

        <CardGrid/>
      </div>

      {
        active == true ? 
        
        <div className={styles.popupContainer}>
          <div className={styles.centerRow}>
            <div className={styles.centerColumn}>
              <div className={styles.popup}>
                <div className={styles.close}>
                  <Image src={close} alt='Close' style={{cursor: 'pointer'}} onClick={() => setActive(false)}/>
                </div>

                <div className={styles.inputContainer}>
                  <div className={styles.label}>
                    Bet Name
                  </div>

                  <div className={styles.input}>
                    <input type="text" />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.inputContainer}>
                    <div className={styles.label}>
                      Game Name
                    </div>

                    <div className={styles.input}>
                      <input type="text" />
                    </div>
                  </div>

                  <div className={styles.inputContainer}>
                    <div className={styles.label}>
                      Expiration Date
                    </div>

                    <div className={styles.input}>
                      <input type="date" />
                    </div>
                  </div>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.label}>
                      Competitor One
                    </div>

                    <div className={styles.input}>
                      <input type="text" />
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.label}>
                      Competitor Two
                    </div>

                    <div className={styles.input}>
                      <input type="text" />
                    </div>
                  </div>

                <div className={styles.inputContainer}>
                  <div className={styles.label}>
                    Game Type
                  </div>

                  <div className={styles.input}>
                    <select name='type' id='type'>
                      <option value='winner'>Winner</option>
                      <option value='sweepstake'>Sweepstake</option>
                    </select>
                  </div>
                </div>

                <div className={styles.buttonContainer} onClick={() => setActive(false)}>
                  Confirm
                </div>
              </div>
            </div>
          </div>
        </div>

        : null
      }
    </div>
  )
}

export default MyBetsComponent