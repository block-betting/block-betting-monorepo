import Card from '../Card'
import styles from './styles.module.scss'

const BetsExplorerComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.number}>
          #
        </div>

        <div className={styles.hash}>
          Bet Hash
        </div>

        <div className={styles.value}>
          Total Bet Value
        </div>

        <div className={styles.games}>
          Games
        </div>
      </div>

      <div className={styles.dataContainer}>
        <a href='/betdetails'><Card number={1} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={2} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={3} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={4} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={5} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={6} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={7} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={8} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={9} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={10} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={11} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={12} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={13} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={14} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={15} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>
        <a href='/betdetails'><Card number={16} betHash='588vN2WenXv3YCNqvQoMQmhLeVWuTGMzAU67pQ8Zxiu8' totalBetValue='000000' games='Block Betting'/></a>

      </div>
    </div>
  )
}

export default BetsExplorerComponent