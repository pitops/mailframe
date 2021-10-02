import ky from 'ky-universal'
import { convert } from 'html-to-text'

import { MailFrameBase, MailFrameBaseOptions } from './base'

interface SendArguments {
  from?: string | string[]
  to: string
  subject: string
  variables: any
}

interface MailFrameOptions extends MailFrameBaseOptions {
  messageRaftUrl: string
}

export class MailFrame extends MailFrameBase {
  client: typeof ky

  constructor({ messageRaftUrl, ...rest }: MailFrameOptions) {
    super(rest)
    if (!messageRaftUrl) {
      throw new Error('MessageRaft URL was not provided')
    }
    this.client = ky.extend({
      prefixUrl: messageRaftUrl,
      timeout: 15000,
      retry: {
        limit: 3,
        methods: ['post'],
      },
    })
  }

  send<T>(provider: string, templateId: string, { subject, from, to, variables }: SendArguments) {
    const html = this.fillTemplateWithValues<T>(templateId, variables)
    const text = convert(html, { wordwrap: 130 })

    return this.client
      .post(`message/send/${provider}`, { json: { data: { subject, from, to, html, text } } })
      .json()
  }
}
