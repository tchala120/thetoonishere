import fs from 'fs'
import axios from 'axios'
import path from 'path'
import dayjs from 'dayjs'

const pathToFile = path.resolve('./posts.json')
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

export const getStaticInstagramPosts = (): StaticInstagramPost | null => {
  const file = getFileData()

  return file == '' ? null : JSON.parse(file)
}

export const getListInstagramPosts = async (): Promise<
  InstagramAPIResponse[]
> => {
  const staticInstagramPost = getStaticInstagramPosts()

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
        pathToFile,
        JSON.stringify({
          data: resp.data.data.slice(0, 9),
          createdAt: Date.now() + age,
        }),
        {
          encoding: 'utf-8',
        }
      )

      return getStaticInstagramPosts()?.data
    })
    .catch((error) => error)
}
