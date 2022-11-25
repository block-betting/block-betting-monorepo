import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from '../../public/assets/brand/logo.svg'
import eye from './assets/eye.svg'
import noneye from './assets/noneye.svg'

const ChangePasswordComponent = () => {
  const [passVisible, setPassVisible] = useState(false)
  const [confirmPassVisible, setConfirmPassVisible] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.squareContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.centerContainer} onClick={() => window.open('/', '_self')}>
              <Image src={logo} alt='Logo' />
            </div>
          </div>

          <div className={styles.title}>
            Password Recovery
          </div>

          <div className={styles.formContainer}>
            <div className={styles.passwordContainer}>
              <div className={styles.label}>Password</div>
              <div className={styles.row}>
                <input type={passVisible == false ? 'password' : 'text'} className={styles.passwordInput} />
                <div className={styles.eyeContainer} onClick={() => setPassVisible(!passVisible)}>
                  <Image src={passVisible == false ? eye : noneye} alt='Show' className={styles.eyeImage} />
                </div>
                <div className={styles.errorContainer}>
                  
                </div>
              </div>
            </div>

            <div className={styles.passwordContainer}>
              <div className={styles.label}>Confirm Password</div>
              <div className={styles.row}>
                <input type={confirmPassVisible == false ? 'password' : 'text'} className={styles.passwordInput} />
                <div className={styles.eyeContainer} onClick={() => setConfirmPassVisible(!confirmPassVisible)}>
                  <Image src={confirmPassVisible == false ? eye : noneye} alt='Show' className={styles.eyeImage} />
                </div>
                <div className={styles.errorContainer}>
                  
                </div>
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.button} onClick={() => window.open('/dashboard', '_self')}>
                Confirm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePasswordComponent