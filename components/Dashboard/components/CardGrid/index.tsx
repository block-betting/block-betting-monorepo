import Card from '../Card'

import styles from './styles.module.scss'

const CardGrid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />
        <Card hash='0x33624' totalValue='99999' gameName='JaumCoin Casino' owner='JaumDark' players={843} stars={1230} />

      </div>
    </div>
  )
}

export default CardGrid