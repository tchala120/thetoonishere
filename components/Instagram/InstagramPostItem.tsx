import type { FC } from 'react'

import NextImage from 'next/image'
import styled from 'styled-components'

import type { InstagramAPIResponse } from 'helpers/instagram'

interface InstagramPostItemProps {
  data: InstagramAPIResponse
}

const InstagramPostItem: FC<InstagramPostItemProps> = ({ data }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <a href={data.permalink} target="_blank" rel="noopener noreferrer">
        <Image
          src={data.media_url}
          alt={data.timestamp}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="https://upload.wikimedia.org/wikipedia/commons/7/70/Solid_white.svg"
        />
      </a>
    </div>
  )
}

export default InstagramPostItem

const Image = styled(NextImage)`
  aspect-ratio: 1/1;
  transition: all 0.25s ease-in-out;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
  }
`
