import { MailFrame } from "@mailframe/mailframe";

export const mailer = new MailFrame({
  messageRaftUrl: "http://localhost:3000",
  templatesPath: "./testBed/templates",
});
