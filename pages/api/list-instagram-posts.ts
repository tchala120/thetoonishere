import type { NextApiRequest, NextApiResponse } from 'next'

import { getListInstagramPosts } from 'helpers/instagram'

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
