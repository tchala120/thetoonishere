import fs from 'fs'
import axios from 'axios'
import path from 'path'
import dayjs from 'dayjs'

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
const filePath = path.join(__dirname, '../../..', '/posts.json')

export const getListInstagramPosts = async (): Promise<
  InstagramAPIResponse[]
> => {
  const file = fs.readFileSync(filePath, 'utf-8')

  const staticInstagramPost: StaticInstagramPost | null =
    file == '' ? null : JSON.parse(file)

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
