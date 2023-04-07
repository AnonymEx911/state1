"use strict";

let methods = require('../../methods');
let user = require('../../../user');
let vehicles = require('../../../property/vehicles');
let { cityhall } = require('../config');

let plugin = exports;

//#region Ініціалізація фракції.
plugin.loadCityHall = () => {
    Blips();
    Reception();
    Parkings();
}
//#endregion
//#region Виведення іконок (Blip) на карті.
function Blips() {
    try {
        mp.utils.ragemp.newBlip(cityhall.reception, 419, 0, 1, 'Правительство');
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[cityhall.Blips]', error);
    }
};
//#endregion
//#region Меню ресепшена.
function Reception() {
    let data = cityhall.reception;
    try {
        methods.createCpVector(data, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
        mp.events.add("onKeyPress:E", (player) => {
            if (!user.isLogin(player)) {
                return;
            };
            if (methods.distanceToPos(data, player.position) < 1.4) {
                player.call('wixcore::security::module::factions:cityhall:menu:list:reception');
            };
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[cityhall.Reception]', error);
    }
}
//#endregion
//#region Службовий транспорт.
function Parkings() {
    let data = cityhall.parkings;
    try {
        methods.createCpVector(data, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
        mp.events.add("onKeyPress:E", (player) => {
            if (!user.isLogin(player)) {
                return;
            };
            if (methods.distanceToPos(data, player.position) < 1.4 && user.isGov(player)) {
                player.call('wixcore::security::module::factions:cityhall:menu:list:parkings', [
                    vehicles.getFractionAllowCarList(1, user.isLeader(player) || user.isSubLeader(player) ||
                        user.isDepLeader(player) || user.isSubLeader(player) ? -1 : user.get(player, 'rank_type')
                    )
                ]);
            };
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[cityhall.Parkings]', error);
    }
}
//#endregion