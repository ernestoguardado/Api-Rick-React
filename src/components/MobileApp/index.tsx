import styles from './styles.module.scss'
import Layout from './Container'
import NavigationBar from './NavigationBar'
import StatusBar from './StatusBar'
import ProfileDescription from './ProfileDescription'
import Follow from './Follow'

const HomeApp: React.FC = () => {
  return (
    <>
      <Layout>
        <div className={styles.Content}>
          <section>
            <Follow />
            <StatusBar />
            <ProfileDescription />
            <img src="/messi.png" />
          </section>
        </div>
        <NavigationBar />
      </Layout>
    </>
  )
}
export default HomeApp
