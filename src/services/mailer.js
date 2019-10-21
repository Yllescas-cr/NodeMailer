var nodemailer = require('nodemailer');

var config = require('../config/env')

post = async (req, res, next) => {
    try {
        const { password, email, rmail } = config;
        console.log(req.body.subject + "\n" + req.body.message + "\n" + email + "\n" + password);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: password
            }
        });
        var mailOptions = {
            from: email,
            to: rmail,
            subject: req.body.subject + ' Sending Email using Node.js',
            text: req.body.message + ' That was easy!'
        };
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                 console.log(error);
                 res.status(500).jsonp('ERROR: ' + error.message);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).jsonp(req.body);
            }
        });

    } catch (error) {
        next(error);
    }
}
module.exports.post = post;