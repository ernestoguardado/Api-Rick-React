import styles from './styles.module.scss'
import { iconsName } from 'components/ui/icons'

type Props = {
  title: string
  iconName: iconsName
}

const Tab: React.FC<Props> = ({ children }) => {
  return <div className={styles.Tabs}>{children}</div>
}

export default Tab
