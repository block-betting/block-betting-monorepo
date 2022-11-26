import Searchbar from '../Searchbar'
import BetsDetailsComponent from './components/BetsDetailsComponent'
import styles from './styles.module.scss'

const BetsDetailsContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <Searchbar />
        <BetsDetailsComponent betHashData='5f85PJrXRTR5yd94Wd3QJrUKC3ZtSFkzMsFqDPL7ZJMZcNhoqLg3dYdthSdmByN4oLbwNQ7tFrXmLWxGx1qo17fs' timestampData='Jan 1, 2022 at 00:00:00 Brasilia Standard Time' betNumberData='155,159,866' associatedValueData='0.01'/>
      </div>
    </div>
  )
}

export default BetsDetailsContainer