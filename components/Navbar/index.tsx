import Image from 'next/image'

import styles from './styles.module.scss'

import logo from 'public/assets/brand/logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <Link href={'/'}><div className={styles.logoContainer}>
          <Image src={logo} alt='Logo' />
        </div></Link>
      </div>
    </div>
  )
}

export default Navbar