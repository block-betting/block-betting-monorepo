import Image from 'next/image'
import { useState } from 'react'

import styles from './styles.module.scss'

import logo from '../../public/assets/brand/logo.svg'
import eye from './assets/eye.svg'
import noneye from './assets/noneye.svg'
import markedsvg from './assets/marked.svg'
import nonmarkedsvg from './assets/nonmarked.svg'

const LoginComponent = () => {
  const [passVisible, setPassVisible] = useState(false)
  const [confirmPassVisible, setConfirmPassVisible] = useState(false)
  const [marked, setMarked] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <div className={styles.squareContainer}>
          <div className={styles.logoContainer}>
            <div className={styles.centerContainer} onClick={() => window.open('/', '_self')}>
              <Image src={logo} alt='Logo' />
            </div>
          </div>

          <div className={styles.formContainer}>
            <div className={styles.emailContainer}>
              <div className={styles.label}>Email</div>
              <input type="text" className={styles.emailInput} />
            </div>

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
              <div className={styles.button} onClick={() => window.open('/login', '_self')}>
                Sign up
              </div>
            </div>

            <div className={styles.registerContainer}>
              Already have an account? <span onClick={() => window.open('/login', '_self')}>Login</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent