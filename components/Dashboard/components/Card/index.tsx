import Image from 'next/image'

import styles from './styles.module.scss'

import star from './assets/star.svg'
import people from './assets/people.svg'

type cardProps = {
  hash: string,
  totalValue: string,
  owner: string,
  gameName: string,
  stars: number,
  players: number
}

const Card = ({...props}: cardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.betDetailsContainer}>
        <div className={styles.detail}>
          <div className={styles.data1}>
            Bet Hash
          </div>

          <div className={styles.data2}>
            {props.hash ? props.hash : '0x0000'}
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.data1}>
            Bet Total Value
          </div>

          <div className={styles.data2}>
            {props.totalValue ? props.totalValue : '00000'}
          </div>
        </div>
      </div>

      <div className={styles.betDataGrid}>
        <div className={styles.leftContainer}>
          <div className={styles.top}>
            <div className={styles.owner}>
              {props.owner ? props.owner : 'Owner of the Bet/'}
            </div>

            <div className={styles.gameName}>
              {props.gameName ? props.gameName : 'Game Name'}
            </div>
          </div>

          <div className={styles.bottom}>
            <div className={styles.stars}>
              <div className={styles.image}>
                <Image src={star} alt='Stars' />
              </div>

              <div className={styles.text}>
                {props.stars ? props.stars : 0}
              </div>
            </div>

            <div className={styles.players}>
              <div className={styles.image}>
                <Image src={people} alt='Players' />
              </div>

              <div className={styles.text}>
                {props.players ? props.players : 0}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.image}>
            <Image />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card