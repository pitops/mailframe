import fs from 'fs'
import path from 'path'
import Mustache from 'mustache'

interface MailFrameOptions {
  templatesPath: string
}

export class MailFrame {
  templatesPath: string

  constructor(options: MailFrameOptions) {
    this.templatesPath = options.templatesPath
  }

  fillTemplateWithValues<T>(templateId: string, values: T) {
    const file = fs.readFileSync(
      path.join(process.cwd(), this.templatesPath, `/${templateId}.mf`),
      {
        encoding: 'utf-8',
      }
    )
    return Mustache.render(file, values)
  }
}
