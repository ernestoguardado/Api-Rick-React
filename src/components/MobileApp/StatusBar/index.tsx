import React from 'react'
import styles from './styles.module.scss'
import Icon from 'components/ui/icons'

const StatusBar: React.FC = ({}) => {
  return (
    <div className={styles.StatusContainer}>
      <Icon iconName="clapping" />
      <span>100K</span>
      <Icon iconName="chat" />
      <span>2K</span>
      <Icon iconName="share" />
      <span>20K</span>
    </div>
  )
}
export default StatusBar
