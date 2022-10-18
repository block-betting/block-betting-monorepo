import BetsDetailsComponent from '../../components/BetsDetails'
import Searchbar from '../../components/Searchbar'
import styles from './styles.module.scss'

const BetsDetails = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <Searchbar />
        <BetsDetailsComponent betHashData='5f85PJrXRTR5yd94Wd3QJrUKC3ZtSFkzMsFqDPL7ZJMZcNhoqLg3dYdthSdmByN4oLbwNQ7tFrXmLWxGx1qo17fs' timestampData='Jan 1, 2022 at 00:00:00 Brasilia Standard Time' betNumberData='155,159,866' associatedValueData='LEGACY'/>
      </div>
    </div>
  )
}

export default BetsDetails