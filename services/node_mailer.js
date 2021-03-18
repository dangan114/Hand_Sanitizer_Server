const nodemailer = require('nodemailer')

module.exports = (text) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    
    var mailOptions = {
        from: 'dangphillip2003@gmail.com',
        to: 'aibinhnguyen47@gmail.com',
        subject: 'Sending email to node.js',
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
}
