import type { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

export interface InstagramAPIResponse {
  id: string
  media_url: string
  permalink: string
  timestamp: string
}

export interface ListInstagramPostsAPIPayload {
  listInstagramPosts: InstagramAPIResponse[]
}

export const getListInstagramPosts = async (): Promise<
  InstagramAPIResponse[]
> =>
  axios
    .get<{ data: InstagramAPIResponse[] }>(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}`
    )
    .then((resp) => resp.data.data.slice(0, 9))
    .catch((error) => error)

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const listInstagramPosts = await getListInstagramPosts()

    res.status(200).json({
      status: 200,
      success: true,
      listInstagramPosts,
    })
  } catch (error) {
    res.status(500).json({
      status: 500,
      success: false,
      error,
    })
  }
}

export default handler
