
module.exports = (app)=> {
    const emailConfig = require('../config/email.js');
    const nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
        host: 'gmail.com',
        secure: true,
        auth: {
            user: emailConfig.email,
            pass: emailConfig.password
        }
    });

    app.post('/api/email', function(req, res, next) {

        res.send('ok').status(200);
        const mailOptions = {
            from: emailConfig.email, // sender address
            to: emailConfig.email, // list of receivers
            subject: req.body.subject, // Subject line
            html: "<p>" + req.body.message + "</p>"
          };
          transporter.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
    })
};