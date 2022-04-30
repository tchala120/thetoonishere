import type { FC } from 'react'

import axios from 'axios'
import useSWR from 'swr'
import { Col, Row, Space } from 'antd'
import { InstagramOutlined } from '@ant-design/icons'

import Section from 'components/Section'
import NotFoundContent from 'components/NotFoundContent'
import LoadingIcon from 'components/LoadingIcon'
import InstagramPostItem from './InstagramPostItem'

import type { ListInstagramPostsAPIPayload } from 'pages/api/list-instagram-posts'

const Instagram: FC = () => {
  const { data, error } = useSWR<{ data: ListInstagramPostsAPIPayload }>(
    '/api/list-instagram-posts',
    (key) => axios.get(key)
  )

  const loading = data == null && error == null

  const listInstagramPosts = data?.data.listInstagramPosts || []

  return (
    <Section>
      <Section.Title>
        <Space size="large" align="center">
          My shots on
          <a
            href="https://instagram.com/itstoon.p"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined style={{ fontSize: 32, color: '#3c3c3c' }} />
          </a>
        </Space>
      </Section.Title>

      <Row gutter={[32, 32]} style={{ marginBottom: 24 }}>
        {loading ? <LoadingIcon /> : renderListInstagramPosts()}
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

    return listInstagramPosts.map((item) => (
      <Col key={item.id} md={8} sm={12} xs={24}>
        <InstagramPostItem data={item} />
      </Col>
    ))
  }
}

export default Instagram
