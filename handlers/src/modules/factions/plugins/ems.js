import methods from '../../methods';
import ui from '../../ui';
import achievement from '../../../manager/achievement';
import inventory from '../../../inventory';
import shopMenu from "../../../shopMenu";
import menuList from "../../../menuList";
import timer from "../../../manager/timer";
import jail from '../../../manager/jail';
import user from '../../../user';
import coffer from "../../../coffer";
import npc from "../../../manager/npc";
import UIMenu from '../../menu';
import config from "../config";

let plugin = {};
let prvTime = 0;

//#region Ініціалізація фракції.
plugin.loadEMS = () => {
    Peds();
    Events();
}
//#endregion
//#region Створення Peds.
function Peds() {
    try {
        config.ems['paleto'].peds.forEach(json => {
            npc.create(mp.game.joaat(json[0]), new mp.Vector3(json[1], json[2], json[3]), json[4], json[5], json[6]);
        });
        config.ems['pillbox'].peds.forEach(json => {
            npc.create(mp.game.joaat(json[0]), new mp.Vector3(json[1], json[2], json[3]), json[4], json[5], json[6]);
        });
        config.ems['sandy'].peds.forEach(json => {
            npc.create(mp.game.joaat(json[0]), new mp.Vector3(json[1], json[2], json[3]), json[4], json[5], json[6]);
        });
        config.ems['zonan'].peds.forEach(json => {
            npc.create(mp.game.joaat(json[0]), new mp.Vector3(json[1], json[2], json[3]), json[4], json[5], json[6]);
        });
    } catch (error) {
        mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[factions::ems:peds]', error);
    }
}
//#endregion
//#region Координати появи гравця під час смерті.
let position = [
    config.ems['paleto'].death,
    config.ems['pillbox'].death,
    config.ems['sandy'].death,
    config.ems['zonan'].death
];

function findNearest(pos) {
    try {
        let prevPos = new mp.Vector3(9999, 9999, 9999);
        position.forEach(function (item) {
            let shopPos = item;
            if (methods.distanceToPos(shopPos, pos) < methods.distanceToPos(prevPos, pos)) {
                prevPos = shopPos;
            }
        });
        if (user.isUsmc()) {
            return config.ems['army'].death;
        }
        return prevPos;
    } catch (error) {
        mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[factions::ems:findNearest]', error);
    }
}
//#endregion
//#region UI Таймер очікування.
plugin.timer = function () {
    try {
        if (user.isLogin()) {
            if (user.getCache('med_time') > 1) {
                if (user.getCache('jail_time') > 0) {
                    user.set('med_time', 0);
                    prvTime = 0;
                    jail.toJail(user.getCache('jail_time'), user.getCache('jail_type'));
                    return;
                }
                user.set('med_time', user.getCache('med_time') - 1);
                // Перевірка на чити.
                if (prvTime > user.getCache('med_time') + 20) {
                    user.kickAntiCheat("Cheat Engine");
                    return;
                }
                prvTime = user.getCache('med_time') + methods.getRandomInt(1, 5);
                if (user.getCache('med_type') === 1) {
                    if (methods.distanceToPos(mp.players.local.position, config.ems['paleto'].death) > 30) {
                        mp.game.ui.notifications.show(`~r~Вам необходимо проходить лечение.`);
                        user.teleportv(config.ems['paleto'].death);
                    }
                } else if (user.getCache('med_type') === 2) {
                    if (methods.distanceToPos(mp.players.local.position, config.ems['sandy'].death) > 20) {
                        mp.game.ui.notifications.show(`~r~Вам необходимо проходить лечение.`);
                        user.teleportv(config.ems['sandy'].death);
                    }
                } else if (user.getCache('med_type') === 3) {
                    if (methods.distanceToPos(mp.players.local.position, config.ems['army'].death) > 20) {
                        mp.game.ui.notifications.show(`~r~Вам необходимо проходить лечение.`);
                        user.teleportv(config.ems['army'].death);
                    }
                } else if (user.getCache('med_type') === 4) {
                    if (methods.distanceToPos(mp.players.local.position, config.ems['zonan'].death) > 15) {
                        mp.game.ui.notifications.show(`~r~Вам необходимо проходить лечение.`);
                        user.teleportv(config.ems['zonan'].death);
                    }
                } else {
                    if (methods.distanceToPos(mp.players.local.position, config.ems['pillbox'].death) > 40) {
                        mp.game.ui.notifications.show(`~r~Вам необходимо проходить лечение.`);
                        user.teleportv(config.ems['pillbox'].death);
                    }
                }
                ui.showSubtitle(`Время лечения~g~ ${user.getCache('med_time')} ~s~сек}.`);
            }
            if (user.getCache('med_time') == 1) {
                freePlayer();
            }
        }
    } catch (error) {
        mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[factions::ems:]', error);
    }
};
//#endregion
//#region Успішне лікування гравця.
function freePlayer(isBuy = false) {
    user.set('med_time', 0);
    prvTime = 0;
    mp.game.ui.notifications.show(`~g~Вы успешно прошли лечение`);
    user.setWaterLevel(500);
    user.setEatLevel(500);
    user.set('med_time', 0);
    achievement.doneDailyById(1);

    if (isBuy) {
        setTimeout(function () {
            user.set('med_time', 0);
            prvTime = 0;
        }, 500);
        setTimeout(function () {
            user.set('med_time', 0);
            prvTime = 0;
        }, 1000);
        return;
    }

    setTimeout(function () {
        if (user.getCache('med_lic')) {
            user.removeMoney(100, `Лечение в больнице`);
            coffer.addMoney(6, 100);
            mp.game.ui.notifications.show(`~g~Стоимость лечения ~s~$100`);
        } else {
            if (user.getCache('online_time') < 300) {
                user.removeMoney(50);
                coffer.addMoney(6, 50, `Лечение в больнице`);
                mp.game.ui.notifications.show(`~g~Стоимость лечения ~s~$50`);
            } else {
                user.removeMoney(300, `Лечение в больнице`);
                coffer.addMoney(6, 300);
                mp.game.ui.notifications.show(`~g~Стоимость лечения ~s~$300`);
            }
        }
    }, 500);
};
//#endregion
//#region Скидання таймера
function reset() {
    user.set('med_time', 0);
    prvTime = 0;
};
//#endregion
//#region Телепорт гравця в точку воскресіння.
plugin.respawn = function () {
    try {
        user.showLoadDisplay();
        timer.setDeathTimer(0);
        if (user.getCache('jail_time') == 0) {
            let pos = findNearest(mp.players.local.position);
            if (methods.distanceToPos(pos, config.ems['paleto'].death) < 50) {
                user.set('med_type', 1);
                user.respawn(config.ems['paleto'].death.x, config.ems['paleto'].death.y, config.ems['paleto'].death.z);
            } else if (methods.distanceToPos(pos, config.ems['sandy'].death) < 50) {
                user.set('med_type', 2);
                user.respawn(config.ems['sandy'].death.x, config.ems['sandy'].death.y, config.ems['sandy'].death.z);
            } else if (methods.distanceToPos(pos, config.ems['army'].death) < 50) {
                user.set('med_type', 3);
                user.respawn(config.ems['army'].death.x, config.ems['army'].death.y, config.ems['army'].death.z);
            } else if (methods.distanceToPos(pos, config.ems['zonan'].death) < 50) {
                user.set('med_type', 4);
                user.respawn(config.ems['zonan'].death.x, config.ems['zonan'].death.y, config.ems['zonan'].death.z);
            } else {
                user.set('med_type', 0);
                user.respawn(config.ems['pillbox'].death.x, config.ems['pillbox'].death.y, config.ems['pillbox'].death.z);
            }
        }
        mp.events.callRemote('playerDeathDone');

        user.setGrabMoney(0);
        user.unCuff();
        user.unTie();
        user.setVirtualWorld(0);

        if (!user.isPolice()) {
            user.updateCharacterCloth();
        }

        mp.game.ui.displayRadar(true);
        mp.game.ui.displayHud(true);
        mp.players.local.freezePosition(false);

        if (user.getCache('jail_time') > 0) {
            user.set('med_time', 0);
            prvTime = 0;
            jail.toJail(user.getCache('jail_time'), user.getCache('jail_type'));
            return;
        }

        if (user.getCache('med_lic') || user.getCache('online_time') < 169) {
            prvTime = 120;
            user.set('med_time', 120);
        } else {
            prvTime = 500;
            user.set('med_time', 500);
        }

        setTimeout(function () {
            user.hideLoadDisplay();
        }, 1000);

    } catch (error) {
        mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[factions::ems:respawn]', error);
    }
}
//#endregion
//#region Меню організації.
function showMenuOrganization() {
    UIMenu.Menu.Create(`Организация`, `~b~EMS органзация`);
    if (user.isLeader() || user.isSubLeader() || ((user.isDepLeader() || user.isDepSubLeader()) && user.getCache('rank_type') === 0)) {
        UIMenu.Menu.AddMenuItem(`Принять в организацию`, '', { invite: true });
    }
    if (user.isEms()) {
        UIMenu.Menu.AddMenuItem(`Выдать мед. страховку`, "Стоимость: ~g~$20,000", { licName: "med_lic" });
        UIMenu.Menu.AddMenuItem(`Выдать разрешение на марихуану`, "Стоимость: ~g~$5,000", { licName: "marg_lic" });
    }
    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: "closeMenu" });
    UIMenu.Menu.Draw();
    UIMenu.Menu.OnSelect.Add(async (item, index) => {
        UIMenu.Menu.HideMenu();
        if (item.licName) {
            let id = methods.parseInt(await UIMenu.Menu.GetUserInput("ID Игрока", "", 9));
            if (id < 0) {
                mp.game.ui.notifications.show("~r~ID Игркоа не может быть меньше нуля");
                return;
            }
            if (item.licName == 'med_lic') {
                mp.events.callRemote('server:user:askSellLic', id, item.licName, 20000);
            }
            if (item.licName == 'marg_lic') {
                mp.events.callRemote('server:user:askSellLic', id, item.licName, 5000);
            }
        }
        if (item.invite) {
            let id = methods.parseInt(await UIMenu.Menu.GetUserInput("ID Игрока", "", 9));
            if (id < 0) {
                mp.game.ui.notifications.show("~r~ID Игркоа не может быть меньше нуля");
                return;
            }
            mp.events.callRemote('server:user:invite', id);
        }
        if (item.coffer) {
            menuList.showCofferInfoMenu(await coffer.getAllData());
        }
    });
}
//#endregion
//#region Меню ресепшена.
function showMenuReception(idx, canFree) {
    let btn = [];
    btn.push({ text: 'Подать заявление на стажировку', bgcolor: '', params: { doName: 'ems:wantWork' } });

    if (canFree) {
        if (user.getCache('med_lic')) {
            btn.push({ text: 'Купить выписку за $800', bgcolor: '', params: { doName: 'ems:free' } });
        } else {
            btn.push({ text: 'Купить выписку за $2000', bgcolor: '', params: { doName: 'ems:free' } });
        }
    } else {
        btn.push({ text: 'Выписка сейчас не доступна', bgcolor: '', params: {} });
    }

    let listPos = [
        config.ems['paleto'].dialog,        // 0
        config.ems['pillbox'].dialog[0],    // 1
        config.ems['pillbox'].dialog[1],    // 2
        config.ems['sandy'].dialog,         // 3
        config.ems['zonan'].dialog,         // 4
    ];

    npc.getDialog(new mp.Vector3(listPos[idx][0], listPos[idx][1], listPos[idx][2] + 0.6), listPos[idx][3], 'Врач', 'Сотрудник EMS', 'Здравствуйте, чем помочь? Хочу вам напомнить что, при наличии мед. страховки стоимость услуг намного ниже', btn);
}
//#endregion
//#region Меню роздягальні.
function showMenuGarderob() {
    UIMenu.Menu.Create(`Гардероб`, `~b~Гардероб EMS`);

    let listGarderob = [
        "Повседневная одежда",
        "Форма парамедика #1",
        "Форма парамедика #2",
        "Зимняя форма парамедика #1",
        "Зимняя форма парамедика #2",
        "Форма спасателя #1",
        "Форма спасателя #2",
        "Форма врача #1",
        "Форма врача #2",
        "Форма врача #3",
        "Форма врача #4",
        "Форма врача #5",
        "Форма врача #6"
    ];

    for (let i = 0; i < listGarderob.length; i++) {
        UIMenu.Menu.AddMenuItem(`${listGarderob[i]}`);
    }

    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: "closeMenu" });
    UIMenu.Menu.Draw();

    UIMenu.Menu.OnIndexSelect.Add((index) => {
        if (index >= listGarderob.length) {
            return;
        }

        if (index === 0) {
            user.giveUniform(index);
        } else {
            user.giveUniform(index + 23);
        }
    });
}
//#endregion
//#region Меню арсенала.
function showMenuArsenal() {
    UIMenu.Menu.Create(`Арсенал`, `~b~Арсенал`);

    UIMenu.Menu.AddMenuItem("Сухпаёк", "", { itemId: 32 });
    UIMenu.Menu.AddMenuItem("Антипохмелин", "", { itemId: 221 });

    if (user.isLeader() || user.isSubLeader()) {
        UIMenu.Menu.AddMenuItem("Рецепт на большую аптечку", "Рецепт для крафта", { recHealB: true });
        UIMenu.Menu.AddMenuItem("Рецепт на малую аптечку", "Рецепт для крафта", { recHeal: true });
    }

    if (user.getCache('rank_type') !== 0 || user.isLeader() || user.isSubLeader() || user.isDepLeader() || user.isDepSubLeader()) {
        UIMenu.Menu.AddMenuItem("Большая Аптечка", "", { itemId: 278 });
        UIMenu.Menu.AddMenuItem("Дефибриллятор", "", { itemId: 277 });
        UIMenu.Menu.AddMenuItem("Полицейское огорождение", "", { itemId: 199 });
        UIMenu.Menu.AddMenuItem("Полосатый конус", "", { itemId: 201 });
        UIMenu.Menu.AddMenuItem("Красный конус", "", { itemId: 202 });
    }

    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: "closeMenu" });
    UIMenu.Menu.Draw();

    UIMenu.Menu.OnSelect.Add(async item => {
        UIMenu.Menu.HideMenu();
        if (item.itemId) {
            inventory.takeNewWeaponItem(item.itemId, `{"owner": "EMS", "userName": "${user.getCache('name')}"}`, 'Выдано оружие').then();
        }
        if (item.recHealB) {
            inventory.takeNewWeaponItem(474, `{"owner": "EMS", "userName": "${user.getCache('name')}", "id":0}`, 'Выдан рецепт').then();
        }
        if (item.recHeal) {
            inventory.takeNewWeaponItem(474, `{"owner": "EMS", "userName": "${user.getCache('name')}", "id":1}`, 'Выдан рецепт').then();
        }
    });
}
//#endregion
//#region Меню перед ресепшеном.
function showMenuMedpanel() {
    UIMenu.Menu.Create(`EMS`, `~b~Мед. панель`);
    UIMenu.Menu.AddMenuItem("Выписать человека", "", { doName: 'free' });
    UIMenu.Menu.AddMenuItem("Вылечить человека", "", { doName: 'heal' });
    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: "closeMenu" });
    UIMenu.Menu.Draw();

    UIMenu.Menu.OnSelect.Add(async item => {
        UIMenu.Menu.HideMenu();
        if (item.doName === 'free') {
            let id = await UIMenu.Menu.GetUserInput("ID Игрока", "", 10);
            mp.events.callRemote('server:med:free', methods.parseInt(id));
        }
        if (item.doName === 'heal') {
            let id = await UIMenu.Menu.GetUserInput("ID Игрока", "", 10);
            mp.events.callRemote('server:med:heal', methods.parseInt(id));
        }
    });
}
//#endregion
//#region Меню службового транспорту.
function showMenuParkings(data) {
    UIMenu.Menu.Create(`Транспорт`, `~b~Транспорт организации`);
    data.forEach(function (item) {
        if (item.rank < 0) {
            UIMenu.Menu.AddMenuItem(`~c~${item.name}: ~s~`, `Транспорт не доступен`, {}, `${item.number + item.id}`);
            return;
        }
        if (item.rank >= user.getCache('rank') || user.isLeader() || user.isSubLeader()) {
            let menuItem = {};
            menuItem.vehicleId = item.id;
            menuItem.vName = item.name;
            UIMenu.Menu.AddMenuItem(`~b~${item.name}: ~s~`, "Нажмите \"~g~Enter~s~\" чтобы взять транспорт", menuItem, `${item.number}`);
        } else {
            UIMenu.Menu.AddMenuItem(`~c~${item.name}: ~s~`, `Транспорт не доступен`, {}, `${item.number + item.id}`);
        }
    });
    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: "closeMenu" });
    UIMenu.Menu.Draw();
    UIMenu.Menu.OnSelect.Add((item, index) => {
        UIMenu.Menu.HideMenu();
        if (item.vehicleId != undefined) {
            mp.events.callRemote('server:vehicle:spawnFractionCar', item.vehicleId);
        }
    });
}
//#endregion
//#region Диалог с NPC
async function showMenuDialogNPC(json) {
    let params = JSON.parse(json);
    if (params.doName === 'ems:wantWork') {
        shopMenu.hideDialog();
        let discord = await menuList.getUserInput('Введите ваш DISCORD', '', 30);
        let text = await menuList.getUserInput('Почему вы хотите тут работать?', '', 100);
        mp.game.ui.notifications.show(`~g~Заявление было отправлено, скоро с вами свяжутся в дискорде`);
        mp.events.callRemote('server:discord:sendWorkEms', discord, text);
    }
    if (params.doName === 'ems:free') {
        shopMenu.hideDialog();
        let price = 2000;
        if (user.getCache('med_lic')) {
            price = 800;
        }
        if (user.getCashMoney() < price) {
            mp.game.ui.notifications.show(`~r~У вас нет при себе денег на выписку`);
            return;
        }
        user.removeCashMoney(price, 'Выписка из больницы');
        freePlayer(true);
    }
    if (params.doName === 'close') {
        shopMenu.hideDialog();
    }
}
//#endregion
//#region Виклик події
function Events() {
    // Меню організації.
    mp.events.add('wixcore::security::module::factions:ems:menu:list:organization', () => {
        try {
            showMenuOrganization();
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:ems:menu:list:organization]', error);
        }
    });
    // Меню ресепшена.
    mp.events.add('wixcore::security::module::factions:ems:menu:list:reception', (idx, canFree) => {
        try {
            showMenuReception(idx, canFree);
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:ems:menu:list:reception]', error);
        }
    });
    // Меню роздягальні.
    mp.events.add('wixcore::security::module::factions:ems:menu:list:garderob', () => {
        try {
            showMenuGarderob();
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:ems:menu:list:garderob]', error);
        }
    });
    // Меню арсенала.
    mp.events.add('wixcore::security::module::factions:ems:menu:list:arsenal', () => {
        try {
            showMenuArsenal();
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:ems:menu:list:arsenal]', error);
        }
    });
    // Меню перед ресепшеном.
    mp.events.add('wixcore::security::module::factions:ems:menu:list:medpanel', () => {
        try {
            showMenuMedpanel();
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:ems:menu:list:medpanel]', error);
        }
    });
    // Меню службового транспорту.
    mp.events.add('wixcore::security::module::factions:ems:menu:list:parkings', (data) => {
        try {
            showMenuParkings(data);
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:ems:menu:list:parkings]', error);
        }
    });
    // Успішне лікування гравця.
    mp.events.add('client:ems:free', () => {
        try {
            freePlayer(true);
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[client:ems:free]', error);
        }
    });
    // Викликається під час смерті гравця.
    mp.events.add("playerDeath", async function (player, reason, killer) {
        try {
            reset();
            user.setTeleport(true);
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[playerDeath]', error);
        }

    });
    // Диалог с NPC
    mp.events.add('client:dialog:btn', async function (json) {
        try {
            showMenuDialogNPC(json);
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[client:dialog:btn]', error);
        }
    });
}
//#endregion

export default plugin;