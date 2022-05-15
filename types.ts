import type { FC, PropsWithChildren } from 'react'

export type FCWithChildren<P = {}> = FC<PropsWithChildren<P>>

export interface BaseLayoutProps {
  title?: string
  description?: string
  footer?: boolean
}
