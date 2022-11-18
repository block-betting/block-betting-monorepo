import Image from 'next/image'

import styles from './styles.module.scss'

import logo from 'public/assets/brand/logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <div className={styles.logo}>
              <Image src={logo} alt='Logo' />
            </div>
          </Link>
        </div>

        <div className={styles.buttonsContainer}>
          <div className={styles.loginContainer} onClick={() => window.open('/login', '_self')}>
            Log in
          </div>

          <div className={styles.signinContainer} onClick={() => window.open('/signup', '_self')}>
            Sign in
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar