import styles from './styles.module.scss'

type betsProps = {
  number: number,
  betHash: string,
  totalBetValue: string,
  games: string,
}

const Card = ({...props}:betsProps) => {
  return (
    <>
      <div className={styles.dataContainer}>
        <div className={styles.numberProp}>
          {props.number}
        </div>

        <div className={styles.hashProp}>
          {props.betHash}
        </div>

        <div className={styles.valueProp}>
          {props.totalBetValue}
        </div>

        <div className={styles.gamesProp}>
          {props.games}
        </div>
      </div>

      <div className={styles.centerLine}>
        <div className={styles.line} />
      </div>
    </>
  )
}

export default Card