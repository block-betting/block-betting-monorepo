import styles from './styles.module.scss'

import CardGrid from './components/CardGrid'
import Sidebar from '../Sidebar'

const DashboardComponent = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <CardGrid />
    </div>
  )
}

export default DashboardComponent