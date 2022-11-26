import styles from './styles.module.scss'

import CardGrid from './components/CardGrid'
import Sidebar from '../Sidebar'
import MetamaskPopup from '../MetamaskPopup'

const DashboardComponent = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.topMargin}>
        <CardGrid />
      </div>
      <MetamaskPopup />
    </div>
  )
}

export default DashboardComponent