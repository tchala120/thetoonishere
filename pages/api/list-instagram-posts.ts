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

const handler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get<{ data: InstagramAPIResponse[] }>(
      `https://graph.instagram.com/me/media?fields=id,media_url,permalink,timestamp&access_token=${process.env.INSTAGRAM_TOKEN}`
    )

    res.status(200).json({
      status: 200,
      success: true,
      listInstagramPosts: response.data.data.slice(0, 9),
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
