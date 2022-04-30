import type { FC } from 'react'

import styled from 'styled-components'

import type { InstagramAPIResponse } from 'pages/api/list-instagram-posts'

interface InstagramPostItemProps {
  data: InstagramAPIResponse
}

const InstagramPostItem: FC<InstagramPostItemProps> = ({ data }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <a href={data.permalink} target="_blank" rel="noopener noreferrer">
        <Image src={data.media_url} alt={data.timestamp} />
      </a>
    </div>
  )
}

export default InstagramPostItem

const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1/1;
  transition: all 0.25s ease-in-out;
  transform-origin: center;

  &:hover {
    transform: scale(1.05);
  }
`
