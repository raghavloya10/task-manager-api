const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raghavloya100@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me kniw how you get along`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'raghavloya100@gmail.com',
        subject: 'We are sorry to let you down',
        text: `Please let us know, ${name}, how we can improve ourselves`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}