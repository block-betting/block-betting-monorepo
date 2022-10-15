import Image from 'next/image'

import search from './assets/search.svg'

import styles from './styles.module.scss'

const Searchbar = () => {
  return (
    <div className={styles.searchbarContainer}>
      <input type='search' placeholder='Search for bet hash, addresses or platform' className={styles.searchbar} />
      
      <div className={styles.searchContainer}>
        <div className={styles.search}>
          <Image src={search} alt='Search' />
        </div>
      </div>
    </div>
  )
}

export default Searchbar