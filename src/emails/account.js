const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const myEmail = 'nate@qstreet.org'

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: myEmail,
    from: myEmail,
    subject: 'Thanks for Joining',
    text: `Welcom to the app, ${name}. Let me know how the app works.`
  })
}

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: myEmail,
    from: myEmail,
    subject: 'Why did you leave',
    text: `Hey ${name}, I was just wondering why you left and how we could make this app better.`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail
}