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
 

 
const sendNotificationEmail = async (query) => {
    const recipient = query.recipient;

    let mailDetails = {
        from: process.env.EMAIL,
        to: recipient,
        subject: 'You Will Now Receive Notifications from StemAI',
        text: 'You have signed up to receive notification from StemAI. You will receive tutoring reccomendation every quarter of the semester.'
        + ' If you would like to stop receiving emails from StemAI please return to the StemAI webpage and go to settings and deselect RECEIVE NOTIFICATIONS.'
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

const sendAuthenticationEmail = async (code, gannon_id) => {
    let recipient = gannon_id + "@gannon.edu";

    let mailDetails = {
        from: process.env.EMAIL,
        to: recipient,
        subject: 'Authentication Code',
        text: 'Your Stem AI Authentication Code is:    ' + code + '    \n If you did not request this code your gannon ID may have been entered in error. Please disregard this email.'
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

const sendRecEmail = async (query) => {
    const recipient = query.recipient;
    const classRec = query.classRec;

    let mailDetails = {
        from: process.env.EMAIL,
        to: recipient,
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

module.exports.sendNotificationEmail = sendNotificationEmail;
module.exports.sendAuthenticationEmail = sendAuthenticationEmail;
