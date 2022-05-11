import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import type { FC, PropsWithChildren, ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  withLayout?: (page: ReactElement) => ReactNode
}

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type FCWithChildren<P = {}> = FC<PropsWithChildren<P>>
