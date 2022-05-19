import { ReactElement, useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getContent, getContentMap } from 'lib/content'
import { useLocale } from 'lib/hooks/useLocale'
import PageLayout from 'lib/layouts/page'
import Navigation from 'lib/components/Navigation'
import style from 'styles/Page.module.css'

type PathProps = {
  path: string
  filename: string
}

type PageProps = {
  data: {
    title: string
    pageWidth: string
  }
  content: string;
  nav: PathProps[]
}

export default function Page(props: PageProps) {
  const content = props.content
  const loc = useLocale()

  useEffect(() => {
    document.documentElement.setAttribute('lang', loc.locale)
  })

  return (
    <div>
      <Head>
        <title>{props.data.title}</title>
      </Head>

      <main>
        <Navigation navItems={props.nav} />
        <div className={style.content}>
      
          <div className={style.text}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </main>
    </div>
  )
}


Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout pageWidth={page.props.data.pageWidth}>
      {page}
    </PageLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { mdData } = await getContent(params.locale + '/' + params.id)
  const contentMap = await getContentMap()
  let navItems = []

  if (params.id) {
    // Make navitems from files with the same id 
    navItems = contentMap.filter((page) => params.id === page.filename)
  }

  return {
    props: {
      data: mdData.data,
      content: mdData.content,
      nav: navItems
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const contentMap = await getContentMap()

  const paths = contentMap
    .filter(file => {
      // Filter pages with path match to /[locale]/[id]/ pattern
      return file.path.split('/').length === 3
    })
    .map(file => {
      return {
        params: {
          // Locale is second from /[locale]/[id]/ pattern
          locale: file.path.split('/', 2)[1],
          id: file.filename
        }
      }
    })

  return {
    paths,
    fallback: false
  }
} 