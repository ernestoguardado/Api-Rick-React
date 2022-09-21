import React, { ReactElement, useState } from 'react'
import TabOption from '../TabOptionMobile'
import styles from './styles.module.scss'

type Props = {
  children: ReactElement[]
}

const Tab: React.FC<Props> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <>
      <ul className={styles.TabNavigation}>
        {children.map((item, index) => (
          <TabOption
            key={index}
            iconName={item.props.iconName}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            isActive={selectedTab === index}
          />
        ))}
      </ul>
      <div>{children[selectedTab]}</div>
    </>
  )
}

export default Tab
