const nodemailer = require('nodemailer');
 
 
let mailTransporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
});
 

 
const sendEmail = async (query) => {
    const recepitient = query.email;
    const classRec = query.classRec;

    let mailDetails = {
        from: process.env.EMAIL,
        to: recepitient,
        subject: 'Tutoring Recommendation',
        text: 'We believe that you would benefit from tutoring for ' + classRec + ' due to previous students experience in this course.' +
        'REMINDER: This is just a recommendation based on past students data. We are not calling you dumb'
    };

    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log(err);
            return("Error: " + err);
        } else {
            console.log("Email Sent");
            return("Email Sent")
        }
    });
}

module.exports.sendEmail = sendEmail;
