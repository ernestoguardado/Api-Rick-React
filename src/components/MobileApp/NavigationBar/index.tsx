import React from 'react'
import styles from './styles.module.scss'
import Tab from 'components/MobileApp/Tab-Mobile/TabsMobile'
import Tabs from 'components/MobileApp/Tab-Mobile/TabMobile'

const NavigationBar: React.FC = ({}) => {
  return (
    <nav className={styles.HomeContainer}>
      <Tabs>
        <Tab title="Home" iconName="house" />
        <Tab title="Challenges" iconName="challenges" />
        <Tab title="Search" iconName="search" />
        <Tab title="Messages" iconName="messages" />
        <Tab title="Profile" iconName="profile" />
      </Tabs>
    </nav>
  )
}
export default NavigationBar
