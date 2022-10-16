import Image from 'next/image'

import styles from './styles.module.scss'

import back from './assets/back.svg'
import refresh from './assets/refresh.svg'
import inspect from './assets/inspect.svg'
import copy from './assets/copy.svg'
import arrow from './assets/arrow.svg'

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

        <div className={styles.overviewLine} />

        <div className={styles.copyContainer}>
          <div className={styles.title}>
            Bet Hash
          </div>

          <div className={styles.centerData}>
            <div className={styles.rowContainer}>
              <div className={styles.imageContainer}>
                <Image src={copy} alt='Copy' onClick={() => navigator.clipboard.writeText(props.betHashData)}/>
              </div>

              <div className={styles.centerData}>
                <div className={styles.data}>
                  {props.betHashData}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.overviewLine} />

        <div className={styles.noCopyContainer}>
          <div className={styles.title}>
            Timestamp
          </div>

          <div className={styles.centerData}>
            <div className={styles.data}>
              {props.timestampData}
            </div>
          </div>
        </div>

        <div className={styles.overviewLine} />

        <div className={styles.copyContainer}>
          <div className={styles.title}>
            Bet Number
          </div>

          <div className={styles.centerData}>
            <div className={styles.rowContainer}>
              <div className={styles.imageContainer}>
                <Image src={copy} alt='Copy' onClick={() => navigator.clipboard.writeText(props.betNumberData)}/>
              </div>

              <div className={styles.centerData}>
                <div className={styles.data}>
                  {props.betNumberData}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.overviewLine} />

        <div className={styles.noCopyContainer}>
          <div className={styles.title}>
            Associated Value
          </div>

          <div className={styles.centerData}>
            <div className={styles.data}>
              {props.associatedValueData}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.resultsDetailsContainer}>
        <div className={styles.title}>
          Results
        </div>

        <div className={styles.arrow}>
          <Image src={arrow} alt='Expand' />
        </div>
      </div>

      <div className={styles.resultsDetailsContainer}>
        <div className={styles.title}>
          Details
        </div>

        <div className={styles.arrow}>
          <Image src={arrow} alt='Expand' />
        </div>
      </div>
    </div>
  )
}

export default BetsDetails