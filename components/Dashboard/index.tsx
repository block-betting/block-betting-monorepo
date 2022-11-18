import Sidebar from '../Sidebar'
import styles from './styles.module.scss'

const DashboardComponent = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
    </div>
  )
}

export default DashboardComponent