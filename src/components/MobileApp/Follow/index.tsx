import React from 'react'
import styles from './styles.module.scss'

const Follow: React.FC = ({}) => {
  return (
    <ul className={styles.ItemsContainer}>
      <li className={styles.ItemsContainer__ItemFollow}>Follow</li>
      <li className={styles.ItemsContainer__ItemForYou}>For You</li>
    </ul>
  )
}
export default Follow
