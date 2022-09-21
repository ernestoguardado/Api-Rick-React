import React from 'react'
import styles from './styles.module.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className={styles.Layout}>
        <div className={styles.MainContent}>{children}</div>
      </div>
    </>
  )
}
export default Layout
