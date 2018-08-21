const emailConfig = require('../config/email.js');
const nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     host: 'gmail.com',
//     secure: true,
//     auth: {
//            user: emailConfig.email,
//            pass: emailConfig.password
//        }
// });

var smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: 'user@gamil.com',
        pass: 'password'
    }
});


module.exports = (app)=> {
    app.post('/api/email', function(req, res, next) {
        const mailOptions = {
            from: req.body.email, // sender address
            to: emailConfig.email, // list of receivers
            subject: req.body.subject, // Subject line
            html: req.body.message
          };
          smtpTransport.sendMail(mailOptions, function (err, info) {
            if(err)
              console.log(err)
            else
              console.log(info);
         });
        res.send('it works');
    })
};