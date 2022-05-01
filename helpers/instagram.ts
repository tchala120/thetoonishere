import fs from 'fs'
import axios from 'axios'
import path from 'path'
import dayjs from 'dayjs'

import staticInstagramPost from 'posts.json'

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
const filePath = path.join(__dirname, '../../../posts.json')

export const getFileData = () => {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    console.log('Error', error)

    return ''
  }
}

export const getListInstagramPosts = async (): Promise<
  InstagramAPIResponse[]
> => {
  if (
    staticInstagramPost != null &&
    dayjs().isBefore(dayjs(staticInstagramPost.createdAt))
  ) {
    return new Promise((resolve) => resolve(staticInstagramPost.data))
  }

  return axios
    .get<{ data: InstagramAPIResponse[] }>(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}`
    )
    .then(async (resp) => {
      fs.writeFileSync(
        filePath,
        JSON.stringify({
          data: resp.data.data.slice(0, 9),
          createdAt: Date.now() + age,
        }),
        {
          encoding: 'utf-8',
        }
      )

      return JSON.parse(fs.readFileSync(filePath, 'utf-8')).data
    })
    .catch((error) => error)
}
