import React from 'react'
import IconList from './iconList'
import styles from './styles.module.scss'
import { IconsName } from './types'

interface Props {
  iconName?: IconsName
  className?: string
  featureIcon?: boolean
}

const Icon: React.FC<Props> = ({ iconName, className, featureIcon }) => {
  return (
    <>
      {featureIcon ? (
        <div className={styles.Icon__FeatureIcon}>
          <IconList className={className} iconName={iconName}></IconList>
        </div>
      ) : (
        <IconList className={className} iconName={iconName}></IconList>
      )}
    </>
  )
}
export default Icon
