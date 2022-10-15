import Image from 'next/image'

import styles from './styles.module.scss'

import back from './assets/back.svg'
import refresh from './assets/refresh.svg'
import inspect from './assets/inspect.svg'

type dataProps = {
  betHashData: string,
  timestampData: string,
  betNumberData: string,
  associatedValueData: string
}

const BetsDetails = ({...props}: dataProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.detailsBets}>
          <div className={styles.tinyTitle}>
            DETAILS
          </div>

          <div className={styles.bigTitle}>
            Bets
          </div>
        </div>

        <div className={styles.optionsContainer}>
        <div className={styles.buttonContainer}>
            <div className={styles.buttonText}>
              Back
            </div>

            <div className={styles.buttonImage}>
              <Image src={back} alt='Back' />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.buttonText}>
              Refresh
            </div>

            <div className={styles.buttonImage}>
              <Image src={refresh} alt='Refresh' />
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.buttonText}>
              Inspect
            </div>

            <div className={styles.buttonImage}>
              <Image src={inspect} alt='Inspect' />
            </div>
          </div>
        </div>
      </div>


      <div className={styles.line} />


      <div className={styles.dataContainer}>
        <div className={styles.overviewContainer}>
          <div className={styles.title}>
            Overview
          </div>
        </div>

        <div className={styles.copyContainer}>
          <div className={styles.title}>
            Bet Hash
          </div>

          <div className={styles.data}>
            {props.betHashData}
          </div>
        </div>

        <div className={styles.noCopyContainer}>
          <div className={styles.title}>
            Timestamp
          </div>

          <div className={styles.data}>
            {props.timestampData}
          </div>
        </div>

        <div className={styles.copyContainer}>
          <div className={styles.title}>
            Bet Number
          </div>

          <div className={styles.data}>
            {props.betNumberData}
          </div>
        </div>

        <div className={styles.noCopyContainer}>
          <div className={styles.title}>
            Associated Value
          </div>

          <div className={styles.data}>
            {props.associatedValueData}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BetsDetails