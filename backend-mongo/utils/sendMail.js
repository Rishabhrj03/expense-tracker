const nodemailer = require('nodemailer');
console.log('I am here ');

const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // port: 465,
  // secure: true,
  service: 'gmail',
  auth: { user: 'rishabhskjoshi@gmail.com', pass: 'fklpznekxtcmclpq' },
});

const mailOptions = {
  from: 'rishabhskjoshi@gmail.com',
  to: 'joshi1rishabh@gmail.com',
  subject: 'Sending Email using Node JS',
  text: 'That email text',
};

function mailSend() {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
}

module.exports = mailSend;
