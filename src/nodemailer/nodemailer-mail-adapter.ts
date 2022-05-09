import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a6fce15a14d0d3",
    pass: "fd551a1021387f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedfget.com>',
      to: 'Ricardo Augusto <ricardoaugusto.eb@gmail.com>',
      subject,
      html: body,

    });
  }
}