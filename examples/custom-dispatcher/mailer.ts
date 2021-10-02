import {
  MailFrameBase,
  MailFrameBaseOptions,
  MailFrameSendArguments,
} from "@mailframe/mailframe";

class Mailer extends MailFrameBase {
  constructor(props: MailFrameBaseOptions) {
    super(props);
  }

  send<T>(
    provider: string,
    templateId: string,
    { subject, from, to, variables }: MailFrameSendArguments
  ) {
    const html = this.fillTemplateWithValues<T>(templateId, variables);

    /** OPTIONAL - auto convert html to text
     * npm install html-to-text
     * const text = convert(html, { wordwrap: 130 });
     * const payload = {subject, from, to , html, text}
     */

    const payload = { subject, from, to, html };
    // here you can call e.g sendgrid to send the payload
    return Promise.resolve();
  }
}

export const mailer = new Mailer({
  templatesPath: "./examples/templates",
});
