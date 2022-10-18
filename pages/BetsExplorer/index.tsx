import BetsExplorerComponent from '../../components/BetsExplorer'
import Searchbar from '../../components/Searchbar'
import styles from './styles.module.scss'

const BetsExplorer = () => {
  return (
    <div className={styles.centerContainer}>
      <div className={styles.container}>
        <Searchbar />
        <BetsExplorerComponent />
      </div>
    </div>
  )
}

export default BetsExplorer