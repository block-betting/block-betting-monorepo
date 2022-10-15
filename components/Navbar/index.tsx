import Image from 'next/image'

import styles from './styles.module.scss'

import logo from 'public/assets/brand/logo.svg'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt='Logo' />
        </div>
      </div>
    </div>
  )
}

export default Navbar