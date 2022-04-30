import type { FC } from 'react'

import { Button, Col, Row, Space } from 'antd'
import { InstagramOutlined } from '@ant-design/icons'

import Section from 'components/Section'
import NotFoundContent from 'components/NotFoundContent'
import InstagramPostItem from './InstagramPostItem'

import type { InstagramAPIResponse } from 'pages/api/list-instagram-posts'

interface InstagramProps {
  listInstagramPosts: InstagramAPIResponse[]
}

const Instagram: FC<InstagramProps> = ({ listInstagramPosts }) => {
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
        {renderListInstagramPosts()}
      </Row>
    </Section>
  )

  function renderListInstagramPosts() {
    if (listInstagramPosts.length === 0) {
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
