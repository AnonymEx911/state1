const nodemailer = require("nodemailer");

module.exports = {
    send(to, subject, message) {
        // Стандартний транспорт SMTP
        var transporter = nodemailer.createTransport({
            host: mp.conf.mailer.connect[0],
            port: mp.conf.mailer.connect[1],
            secure: mp.conf.mailer.connect[2],
            auth: {
                user: mp.conf.mailer.connect[3],
                pass: mp.conf.mailer.connect[4]
            },
        });
        // Конструктор повідомлення.
        message += `<br /><br / > ${mp.conf.mailer.copyright}`;
        var mailOptions = {
            from: mp.conf.mailer.connect[3],
            to: to,
            subject: subject,
            html: message
        };
        // Надсилання повідомлення користувачу.
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(`[Mailer] ${err}`)
            } else {
                console.log(`[Mailer] Message sent to ${mailOptions.to}`);
            }
        });
    }
}