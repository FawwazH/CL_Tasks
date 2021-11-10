const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user) {
    this.emailNotification = user.emailNotification;
    this.responsibleFor = user.responsibleFor;
    this.itemTitle = user.itemTitle;
    this.dueDate = user.dueDate;
    this.from = 'fawwazhosein37@gmail.com';
  }
  

  newTransport() {
      // Sendgrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
}

  // Send the actual email
  async send(template) {
    // 1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/${template}.pug`, {
      firstName: this.responsibleFor,
      itemTitle: this.itemTitle,
      dueDate: this.dueDate
    });

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.emailNotification,
      html,
      text: htmlToText.fromString(html)
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendReminder() {
    await this.send('reminder');
  }

};
