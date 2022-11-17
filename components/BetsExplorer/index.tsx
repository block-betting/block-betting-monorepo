import Searchbar from '../Searchbar'
import BetsExplorerComponent from './components/BetsExplorerComponent'
import styles from './styles.module.scss'

const BetsExplorerContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columnContainer}>
        <Searchbar />
        <BetsExplorerComponent />
      </div>
    </div>
  )
}

export default BetsExplorerContainer