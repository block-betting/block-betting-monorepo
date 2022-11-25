import Image from 'next/image'

import styles from './styles.module.scss'

import logo from '../../public/assets/brand/logo.svg'

const PasswordRecoveryComponent = () => {

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

          <div className={styles.description}>
            Enter the email you used when registering
            to recover your password. You will receive a
            password reset link.
          </div>

          <div className={styles.formContainer}>
            <div className={styles.emailContainer}>
              <div className={styles.label}>Email</div>
              <input type="text" className={styles.emailInput} />
            </div>

            <div className={styles.buttonContainer}>
              <div className={styles.button} onClick={() => window.open('/changepassword', '_self')}>
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordRecoveryComponent