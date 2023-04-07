"use strict";

import user from '../../user';
import inventory from '../../inventory';

let dispenser = {};
let sprunk = 0;
let cola = 0;
let count = 1;

dispenser.checker = function () {
    var plPos = mp.players.local.position;
    sprunk = 0; // Sprunk
    sprunk = mp.game.object.getClosestObjectOfType(plPos.x, plPos.y, plPos.z, 0.5, 1114264700, false, false, false);
    if (sprunk != 0) {
        mp.game.ui.notifications.show("Нажмите ~g~E~s~ чтобы открыть меню торгового автомата.");
        mp.game.ui.notifications.show("Модуль в разработке, доступно только Бутылка воды Rainé за 50$.");
    }
    cola = 0; // Cola
    cola = mp.game.object.getClosestObjectOfType(plPos.x, plPos.y, plPos.z, 0.5, 992069095, false, false, false);
    if (cola != 0) {
        mp.game.ui.notifications.show("Нажмите ~g~E~s~ чтобы открыть меню торгового автомата.");
        mp.game.ui.notifications.show("Модуль в разработке, доступна только Баночка ECola за 100$.");
    }
}

dispenser.sprunk = function () {
    return sprunk !== 0;
};

dispenser.cola = function () {
    return cola !== 0;
};

// dispenser.playAnime = function() {
//    // Тут будет анимация
// }

dispenser.pressE = function () {
    if (dispenser.sprunk()) {
        inventory.addItem(242, count, 1, user.getCache('id'), 1);
        user.removeMoney(50, "Вода | Воспользовался торговым автоматом.");
        mp.game.ui.notifications.show("Вы купили Бутылку воды Rainé за 50$");
        // dispenser.playAnime();
    }
    if (dispenser.cola()) {
        inventory.addItem(241, count, 1, user.getCache('id'), 1);
        user.removeMoney(100, "Кола | Воспользовался торговым автоматом.");
        mp.game.ui.notifications.show("Вы купили Баночку ECola за 100$");
        // dispenser.playAnime();
    }
}

export default dispenser;