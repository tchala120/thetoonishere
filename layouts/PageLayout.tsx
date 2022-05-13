import { NextSeo } from 'next-seo'
import Head from 'next/head'
import styled from '@emotion/styled'
import { Breadcrumb } from 'antd'
import Link from 'next/link'

import Section from 'components/Section'
import Footer from 'components/Footer'

import useBreadcrumbs from 'hooks/useBreadcrumbs'

import type { BaseLayoutProps, FCWithChildren } from 'types'

const PageLayout: FCWithChildren<BaseLayoutProps> = ({
  title = '👋 Hi! | thetoonishere',
  description = "Toon's personal website",
  children,
}) => {
  const routes = useBreadcrumbs()

  return (
    <PageLayoutContainer>
      <NextSeo title={title} description={description} />

      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />

        <link rel="shortcut icon" href="/favicon.webp" />
      </Head>

      <Section>
        <Breadcrumb>
          {routes.map((route) => (
            <Breadcrumb.Item key={route.path}>
              <Link href={route.path}>
                <a>{route.breadcrumbName}</a>
              </Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
      </Section>

      {children}

      <Footer />
    </PageLayoutContainer>
  )
}

export default PageLayout

const PageLayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 768px;
  padding: 50px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 24px;
  }
`
