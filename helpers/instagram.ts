import fs from 'fs'
import axios from 'axios'
import path from 'path'
import dayjs from 'dayjs'

import staticInstagramPosts from 'posts.json'

const pathToFile = path.join(process.cwd(), 'posts.json')
export interface InstagramAPIResponse {
  id: string
  media_url: string
  permalink: string
  timestamp: string
}

export interface ListInstagramPostsAPIPayload {
  listInstagramPosts: InstagramAPIResponse[]
}

export interface StaticInstagramPost {
  data: InstagramAPIResponse[]
  createdAt: number
}

const age = 600000 // 10 minutes

export const getFileData = () => {
  try {
    return fs.readFileSync(pathToFile, 'utf-8')
  } catch (error) {
    console.log('Error', error)

    return ''
  }
}

export const getListInstagramPosts = async (): Promise<
  InstagramAPIResponse[]
> => {
  if (
    staticInstagramPosts != null &&
    dayjs().isBefore(dayjs(staticInstagramPosts.createdAt))
  ) {
    return new Promise((resolve) => resolve(staticInstagramPosts.data))
  }

  return axios
    .get<{ data: InstagramAPIResponse[] }>(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}`
    )
    .then(async (resp) => {
      fs.writeFileSync(
        pathToFile,
        JSON.stringify({
          data: resp.data.data.slice(0, 9),
          createdAt: Date.now() + age,
        }),
        {
          encoding: 'utf-8',
        }
      )

      return JSON.parse(fs.readFileSync(pathToFile, 'utf-8')).data
    })
    .catch((error) => error)
}
