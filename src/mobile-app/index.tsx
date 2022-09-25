import HomeApp from 'components/MobileApp'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


export default function HomeAppPage() {
  return (
   <HomeApp/>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  locale,
}: {
  locale?: string
}) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || '')),
    },
  }
}
