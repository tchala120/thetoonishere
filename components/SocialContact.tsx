import type { FC } from 'react'

import { Space, Tooltip } from 'antd'

import Section from 'components/Section'

import { listSocialContacts } from 'constants/social'

import { event } from 'helpers/gtag'

const SocialContact: FC = () => {
  return (
    <Section>
      <Space size="large">
        {listSocialContacts.map(({ id, name, link, Icon }) => (
          <Tooltip key={id} title={name}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                event({
                  action: 'socialIconClick',
                  category: 'Social Icon',
                  label: `Click ${name}`,
                  value: id,
                })
              }
            >
              <Icon style={{ fontSize: 32, color: '#3c3c3c' }} />
            </a>
          </Tooltip>
        ))}
      </Space>
    </Section>
  )
}

export default SocialContact
