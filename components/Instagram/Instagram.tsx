import type { FC } from 'react'

import { Col, Row } from 'antd'

import Section from 'components/Section'
import LoadingIcon from 'components/LoadingIcon'
import NotFoundContent from 'components/NotFoundContent'
import InstagramPostItem from './InstagramPostItem'

import useRequest from 'hooks/useRequest'

import type { ListInstagramPostsAPIPayload } from 'pages/api/list-instagram-posts'

const Instagram: FC = () => {
  const { loading, response, error } = useRequest<ListInstagramPostsAPIPayload>(
    '/api/list-instagram-posts'
  )

  const listInstagramPosts = response?.data.listInstagramPosts || []

  return (
    <Section>
      <Section.Title>My shots</Section.Title>

      <Row gutter={[32, 32]} style={{ marginBottom: 24 }}>
        {loading ? <LoadingIcon spin /> : renderListInstagramPosts()}
      </Row>
    </Section>
  )

  function renderListInstagramPosts() {
    if (error || listInstagramPosts.length === 0) {
      return (
        <Col span={24}>
          <NotFoundContent title="Cannot display shots right now.">
            <a
              href="https://instagram.com/itstoon.p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Directly to my instagram!
            </a>
          </NotFoundContent>
        </Col>
      )
    }

    return response?.data.listInstagramPosts.map((item) => (
      <Col key={item.id} md={8} xs={12}>
        <InstagramPostItem data={item} />
      </Col>
    ))
  }
}

export default Instagram
