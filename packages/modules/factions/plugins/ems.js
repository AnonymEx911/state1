"use strict";

let methods = require('../../methods');
let user = require('../../../user');
let inventory = require('../../../inventory');
let vehicles = require('../../../property/vehicles');
let { ems } = require('../config');

let plugin = exports;

//#region Ініціалізація фракції.
plugin.loadEMS = () => {
    Blips();
    Organization();
    Reception();
    Garderob();
    Arsenal();
    Stock();
    MedPanel();
    Elevator();
    Parkings();
}
//#endregion
//#region Виведення іконок (Blip) на карті.
function Blips() {
    var data = [
        ems['paleto'].organization,
        ems['pillbox'].organization,
        ems['sandy'].organization,
        ems['zonan'].organization
    ];
    try {
        data.forEach(arg => {
            methods.createBlip(arg, 61, 1, 0.85, 'Больница');
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Blips]', error);
    }
};
//#endregion
//#region Кабінет організації.
function Organization() {
    let data = [
        ems['paleto'].organization,
        ems['pillbox'].organization,
        ems['sandy'].organization,
        ems['zonan'].organization
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!user.isLogin(player)) {
                    return;
                }
                if (user.isLeader(player) || user.isSubLeader(player) || user.isDepLeader(player) || user.isDepSubLeader(player)) {
                    if (methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security::module::factions:ems:menu:list:organization');
                    };
                }
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Organization]', error);
    }
}
//#endregion
//#region Меню ресепшена.
function Reception() {
    let data = [
        ems['paleto'].reception,
        ems['pillbox'].reception[0],
        ems['pillbox'].reception[1],
        ems['sandy'].reception,
        ems['zonan'].reception
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg[1], 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!user.isLogin(player)) {
                    return;
                };
                if (methods.distanceToPos(arg[1], player.position) < 1.4) {
                    player.call('wixcore::security::module::factions:ems:menu:list:reception', [arg[0], methods.getCurrentOnlineFraction(6) < 6]);
                };
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Reception]', error);
    }
}
//#endregion
//#region Меню роздягальні.
function Garderob() {
    let data = [
        ems['paleto'].garderob,
        ems['pillbox'].garderob,
        ems['sandy'].garderob,
        ems['zonan'].garderob
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!user.isLogin(player)) {
                    return;
                };
                if (user.isEms(player)) {
                    if (methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security::module::factions:ems:menu:list:garderob');
                    };
                };
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Garderob]', error);
    }
}
//#endregion
//#region Меню арсенала.
function Arsenal() {
    let data = [
        ems['paleto'].arsenal,
        ems['pillbox'].arsenal,
        ems['sandy'].arsenal,
        ems['zonan'].arsenal
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {

                if (!user.isLogin(player)) {
                    return;
                };
                if (user.isEms(player)) {
                    if (methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security::module::factions:ems:menu:list:arsenal');
                    };
                };
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Arsenal]', error);
    }
}
//#endregion
//#region Меню склада.
function Stock() {
    let data = [
        ems['paleto'].stock,
        ems['pillbox'].stock,
        ems['sandy'].stock,
        ems['zonan'].stock
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!user.isLogin(player)) {
                    return;
                };
                if (user.isEms(player)) {
                    if (methods.distanceToPos(arg, player.position) < 1.4) {
                        inventory.getItemList(player, inventory.types.StockGov, user.getId(player));
                    };
                };
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Stock]', error);
    }
}
//#endregion
//#region Меню перед ресепшеном.
function MedPanel() {
    let data = [
        ems['paleto'].medpanel,
        ems['pillbox'].medpanel,
        ems['sandy'].medpanel,
        ems['zonan'].medpanel
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!user.isLogin(player)) {
                    return;
                };
                if (user.isEms(player)) {
                    if (methods.distanceToPos(arg, player.position) < 1.4) {
                        player.call('wixcore::security::module::factions:ems:menu:list:medpanel');
                    };
                };
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.MedPanel]', error);
    }
}
//#endregion
//#region Телепорт - ліфти
function Elevator() {
    try {
        let helicopter = ems['pillbox'].elevator.helicopter;
        let parking = ems['pillbox'].elevator.parking;
        // Взаємодія з об'єктом.
        mp.events.add("onKeyPress:E", (player) => {
            if (!user.isLogin(player)) {
                return;
            }
            methods.checkTeleport(player, helicopter[0], helicopter[1]);
            methods.checkTeleport(player, parking[0], parking[1]);
        });
        // Парковка - вертолітний майданчик.
        helicopter.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
        });
        // Парковка - службового транспорту.
        parking.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Elevator]', error);
    }
}
//#endregion
//#region Службовий транспорт.
function Parkings() {
    let data = [
        ems['paleto'].parkings,
        ems['pillbox'].parkings,
        ems['sandy'].parkings,
        ems['zonan'].parkings
    ];
    try {
        data.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 1, -1, [244, 67, 54, 100]);
            mp.events.add("onKeyPress:E", (player) => {
                if (!user.isLogin(player)) {
                    return;
                };
                if (methods.distanceToPos(arg, player.position) < 1.4 && user.isEms(player)) {
                    player.call('wixcore::security::module::factions:ems:menu:list:parkings', [
                        vehicles.getFractionAllowCarList(6, user.isLeader(player) || user.isSubLeader(player) ||
                            user.isDepLeader(player) || user.isSubLeader(player) ? -1 : user.get(player, 'rank_type')
                        )
                    ]);
                };
            });
        });
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.Parkings]', error);
    }
}
//#endregion
//#region Виписати гравця
plugin.remoteMedFree = function (player, id) {
    if (!user.isLogin(player)) {
        return;
    }
    try {
        let p = mp.players.at(id);
        if (user.isLogin(p)) {
            if (methods.distanceToPos(p.position, player.position) > 10) {
                player.notify('~r~Вы слишком далеко друг от друга');
                return;
            }
            if (!user.isLogin(p) || user.get(p, 'med_time') <= 0) {
                player.notify('~r~У игрок не проходит лечение');
                return;
            }
            coffer.addMoney(coffer.getIdByFraction(user.get(player, 'fraction_id'), 400));
            user.addMoney(player, 400, 'Премия');
            player.notify('~g~Вы выписали игрока. Премия: ~s~$400');
            p.call('client:ems:free');
        } else {
            player.notify('~r~Игрок не найден');
        }
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.remoteMedFree]', error);
    }
}
//#endregion
//#region Вилікувати гравця
plugin.remoteMedHeal = function (player, id) {
    if (!user.isLogin(player)) {
        return;
    }
    try {
        let p = mp.players.at(id);
        if (user.isLogin(p)) {

            if (methods.distanceToPos(p.position, player.position) > 10) {
                player.notify('~r~Вы слишком далеко друг от друга');
                return;
            }

            player.notify('~g~Вы вылечили игрока.');
            user.setHealth(p, 100);
        } else {
            player.notify('~r~Игрок не найден');
        }
    } catch (error) {
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[ems.remoteMedHeal]', error);
    }
}
//#endregion