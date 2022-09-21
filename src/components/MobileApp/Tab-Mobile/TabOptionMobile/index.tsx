import styles from './styles.module.scss'
import Icon, { iconsName } from 'components/ui/icons'

type Props = {
  title?: string
  iconName?: iconsName
  index: number
  setSelectedTab: (index: number) => void
  isActive: boolean
}

const TabOption: React.FC<Props> = ({
  title,
  iconName,
  setSelectedTab,
  index,
  isActive,
}) => {
  return (
    <li
      className={isActive ? styles.TabActive : styles.Tab}
      onClick={() => setSelectedTab(index)}
    >
      <span className={styles.IconName}>
        <Icon
          iconName={iconName}
          className={isActive ? styles.IconNameActive : styles.IconName}
        />
      </span>

      <span>{title}</span>
    </li>
  )
}

export default TabOption
