import React from 'react'
import styles from './styles.module.scss'
import Icon from 'components/ui/icons'

const ProfileDescription: React.FC = ({}) => {
  return (
    <div className={styles.Description}>
      <div className={styles.Description__Name}>
        <img src="/messIcon.png" />
        <span>Lionel Messi</span>
        <Icon iconName="miniCheckCircleApp" />
      </div>
      <div className={styles.Description__Indications}>
        <span>This video was recorded when I was play...</span>
      </div>
    </div>
  )
}
export default ProfileDescription
