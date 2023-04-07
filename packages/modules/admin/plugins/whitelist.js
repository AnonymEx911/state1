let user = require('../../../user');
let chat = require('../../chat');
let conf = require('../config');
let list = exports;

// Ініціалізація модуля.
list.init = async function () {
    if (conf.whitelist) {
        await list.connect();
    }
};
// Перевірка гравця, чи допущено його на сервер.
list.connect = async function (player) {
    mp.events.add('playerJoin', async player => {
        var db = await mp.lib.mysql.model.user.findOne({
            where: { social: player.socialClub.toLowerCase() }
        });
        if (db === null) {
            player.kick();
            return;
        }
        if (db.whitelist === 'N') {
            player.kick();
            return;
        }
    });
    return;
};
// Додаємо гравця до білого списку.
list.add = async function (player, social) {
    if (!user.isAdmin(player)) {
        return;
    }
    if (!conf.whitelist) {
        player.notify('~r~Whitelist отключен в данный момент (admin.config).');
        return;
    }
    await mp.lib.mysql.model.user.update({ whitelist: 'Y' }, { where: { social: social } });
    chat.sendToAll(`Администратор ${user.getRpName(player)}`, `Логин Social Clab - ${social} был занесён в белый список!`, chat.clRed);
};
// Видаляємо гравця з білого списку
list.remove = async function (player, social) {
    if (!user.isAdmin(player)) {
        return;
    }
    if (!conf.whitelist) {
        player.notify('~r~Whitelist отключен в данный момент (admin.config).');
        return;
    }
    await mp.lib.mysql.model.user.update({ whitelist: 'N' }, { where: { social: social } });
    chat.sendToAll(`Администратор ${user.getRpName(player)}`, `Логин Social Clab - ${social} был удален из белого списка!`, chat.clRed);
};