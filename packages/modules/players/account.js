let user = require('../../user');
let methods = require('../methods');

module.exports = {
    // Створення облікового запису, і авторизація його.
    async Create(player, login, pass, email) {
        if (!mp.players.exists(player)) {
            return;
        }
        user.doesExistAccount(login, email, player.socialClub, function (callback) {
            var social = player.socialClub;

            if (callback == 1) {
                user.showCustomNotify(player, 'Аккаунт с такими SocialClub уже существует', 1);
                return;
            } else if (callback == 2) {
                user.showCustomNotify(player, 'Логин уже занят', 1);
                return;
            } else if (callback == 3) {
                user.showCustomNotify(player, 'Email уже занят', 1);
                return;
            }

            if (player.accSocial) {
                social = player.accSocial;
            }

            mp.lib.mysql.model.account.create({
                login: login,
                email: email,
                social: social,
                serial: player.serial,
                password: methods.sha256(pass),
                reg_ip: player.ip,
                reg_timestamp: methods.getTimeStamp()
            });

            // Надсилання логіну та паролю на пошту
            // var message = `<b>Ваши данные для входа:</b> <b>Логин:</b> ${login} <br /> <b>Пароль:</b> ${password}`;
            // var subject = 'Добро пожаловать на сервер «WixCore»';
            // mp.utils.mailer(email, subject, message);

            setTimeout(function () {
                user.loginAccount(player, login, pass);
            }, 1000)
        });
    }
}