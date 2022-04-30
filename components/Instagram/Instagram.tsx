import type { FC } from 'react'

import { Button, Col, Row, Space } from 'antd'

import Section from 'components/Section'
import LoadingIcon from 'components/LoadingIcon'
import NotFoundContent from 'components/NotFoundContent'
import InstagramPostItem from './InstagramPostItem'

import useRequest from 'hooks/useRequest'

import type { ListInstagramPostsAPIPayload } from 'pages/api/list-instagram-posts'
import { InstagramOutlined } from '@ant-design/icons'

const Instagram: FC = () => {
  const { loading, response, error } = useRequest<ListInstagramPostsAPIPayload>(
    '/api/list-instagram-posts'
  )

  const listInstagramPosts = response?.data.listInstagramPosts || []

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
            <Button
              icon={<InstagramOutlined style={{ fontSize: 32 }} />}
              type="text"
            />
          </a>
        </Space>
      </Section.Title>

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
      <Col key={item.id} xs={24} md={8}>
        <InstagramPostItem data={item} />
      </Col>
    ))
  }
}

export default Instagram
