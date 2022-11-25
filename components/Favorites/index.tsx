import CardGrid from '../Dashboard/components/CardGrid'
import Sidebar from './components/Sidebar'
import styles from './styles.module.scss'
 
export const FavoritesComponent = () => {
  return (
    <div className={styles.container}>
      <Sidebar />

      <div className={styles.topMargin}>
        <CardGrid />
      </div>
    </div>
  )
}