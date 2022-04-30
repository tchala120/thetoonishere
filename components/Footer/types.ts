import { ComponentType } from 'react'

export interface SocialContact {
  id: number
  name: string
  link: string
  Icon: ComponentType<any>
}
