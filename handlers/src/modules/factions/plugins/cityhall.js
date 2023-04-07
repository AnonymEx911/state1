import methods from '../../methods';
import menuList from "../../../menuList";
import user from '../../../user';
import coffer from "../../../coffer";
import npc from "../../../manager/npc";
import UIMenu from '../../menu';
import config from "../config";

let plugin = {};

//#region Ініціалізація фракції.
plugin.loadCityHall = () => {
    Peds();
    Events();
}
//#endregion
//#region Створення Peds.
function Peds() {
    try {
        config.cityhall.peds.forEach(json => {
            npc.create(mp.game.joaat(json[0]), new mp.Vector3(json[1], json[2], json[3]), json[4], json[5], json[6]);
        });
    } catch (error) {
        mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
        // Потрібно зробити утиліту запису помилки у файл.
        methods.debug('[factions::cityhall:peds]', error);
    }
}
//#endregion
//#region Меню ресепшена.
function showMenuReception() {
    if (methods.isBlackout()) {
        mp.game.ui.notifications.show(`~r~В городе отсутствует свет`);
        return;
    }

    UIMenu.Menu.Create(` `, `~b~Секретарь правительства`, 'gov', false, false, 'gov');

    if (user.getCache('work_lic') == '') {
        UIMenu.Menu.AddMenuItem("Оформить WorkID", "", { doName: 'getWorkId' });
    }

    if (user.getCache('reg_status') === 0) {
        if (user.getCache('online_time') < 169) {
            UIMenu.Menu.AddMenuItem("Оформить регистрацию", 'Стоимость: ~g~Бесплатно', { doName: 'getRegisterFree' });
        } else {
            UIMenu.Menu.AddMenuItem("Оформить регистрацию", 'Стоимость: ~g~$1,000', { doName: 'getRegister' });
        }
    }

    if (user.getCache('reg_status') === 1) {
        UIMenu.Menu.AddMenuItem("Оформить гражданство", 'Стоимость: ~g~$10,000', { doName: 'getFullRegister' });
    }

    UIMenu.Menu.AddMenuItem("Работа", "", { doName: 'showMeriaJobListMenu' });
    UIMenu.Menu.AddMenuItem("Лицензионный центр", "", { doName: 'showLicBuyMenu' });
    UIMenu.Menu.AddMenuItem("Имущество", "Операции с вашим имуществом", { doName: 'showMeriaSellHvbMenu' });
    UIMenu.Menu.AddMenuItem("Налоговый кабинет", "", { doName: 'showMeriaTaxMenu' });

    if (user.getCache('house_id') > 0) {
        UIMenu.Menu.AddMenuItem("Подселение", "", { doName: 'showMeriaHousePeopleMenu' });
    }

    UIMenu.Menu.AddMenuItem("Экономика штата", "", { doName: 'showMeriaInfoMenu' });
    UIMenu.Menu.AddMenuItem("Подать заявление на стажировку", "", { doName: 'govWork' });
    UIMenu.Menu.AddMenuItem("~y~Создать семью по цене $500,000", "", { doName: 'createFamily' });
    UIMenu.Menu.AddMenuItem("~y~Оплата штрафов", "", { doName: 'showMeriaTicketMenu' });
    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: 'closeMenu' });
    UIMenu.Menu.Draw();

    UIMenu.Menu.OnSelect.Add(async (item, index) => {
        UIMenu.Menu.HideMenu();

        if (item.doName == 'govWork') {
            let discord = await menuList.getUserInput('Введите ваш DISCORD', '', 30);
            let text = await menuList.getUserInput('Почему вы хотите тут работать?', '', 100);
            mp.game.ui.notifications.show(`~g~Заявление было отправлено, скоро с вами свяжутся в дискорде`);
            mp.events.callRemote('server:discord:sendWorkGov', discord, text);
        }

        if (item.doName == 'createFamily') {
            let text = await menuList.getUserInput('Введите название семьи', '', 30);
            if (text === '') {
                return;
            }
            mp.events.callRemote('server:family:create', text);
        }
        if (item.doName == 'showMeriaSellHvbMenu') {
            menuList.showMeriaSellHvbMenu(await coffer.getAllData());
        }

        if (item.doName == 'showMeriaTaxMenu') {
            menuList.showMeriaTaxMenu();
        }

        if (item.doName == 'showMeriaInfoMenu') {
            menuList.showMeriaInfoMenu(await coffer.getAllData());
        }

        if (item.doName == 'showMeriaJobListMenu') {
            menuList.showMeriaJobListMenu();
        }

        if (item.doName == 'showMeriaHousePeopleMenu') {
            menuList.showMazeBankHousePeopleMenu();
        }

        if (item.doName == 'showMeriaTicketMenu') {
            mp.events.callRemote('server:showMeriaTicketMenu');
        }

        if (item.doName == 'showLicBuyMenu') {
            menuList.showLicBuyMenu();
        }

        if (item.doName == 'getRegister') {
            if (user.getBankMoney() < 1000) {
                mp.game.ui.notifications.show("~r~У Вас недостаточно средств на банковском счету");
                return;
            }

            if (user.getCache('reg_status') > 0) {
                mp.game.ui.notifications.show("~r~Вам не нужна регистрация");
                return;
            }

            user.removeCashMoney(1000, 'Получение регистрации');
            user.set('reg_status', 1);
            mp.game.ui.notifications.show("~g~Поздравялем, вы получили регистрацию!");
            user.addHistory(0, 'Получил регистрацию');
            user.save();
        }

        if (item.doName == 'getRegisterFree') {
            if (user.getCache('reg_status') > 0) {
                mp.game.ui.notifications.show("~r~Вам не нужна регистрация");
                return;
            }

            user.set('reg_status', 1);
            mp.game.ui.notifications.show("~g~Поздравялем, вы получили регистрацию!");
            user.addHistory(0, 'Получил регистрацию');
            user.save();
        }

        if (item.doName == 'getFullRegister') {
            if (user.getCache('reg_status') > 1) {
                mp.game.ui.notifications.show("~r~У Вас уже есть гражданство");
                return;
            }

            if (user.getBankMoney() < 10000) {
                mp.game.ui.notifications.show("~r~У Вас недостаточно средств на банковском счету");
                return;
            }

            if (user.getCache('work_lvl') < 4) {
                mp.game.ui.notifications.show("~r~Рабочий стаж должен быть 4 уровня");
                return;
            }

            if (user.getCache('reg_status') < 1) {
                mp.game.ui.notifications.show("~r~Вам необходима регистрация");
                return;
            }

            user.removeCashMoney(10000, 'Получение гражданства');
            user.set('reg_status', 2);
            mp.game.ui.notifications.show("~g~Поздравялем, вы получили регистрацию!");
            user.addHistory(0, 'Получил гражданство');
            user.save();
        }

        if (item.doName == 'getWorkId') {
            if (user.getCache('work_lic') != '') {
                mp.game.ui.notifications.show("~r~У Вас уже есть WorkID");
                return;
            }

            if (user.getCache('reg_status') == 0) {
                mp.game.ui.notifications.show("~r~У Вас нет регистрации или гражданства");
                return;
            }

            try {
                user.set('work_lic', methods.getRandomWorkID());
                user.set('work_date', weather.getFullRpDate());
                mp.game.ui.notifications.show("~g~Поздравялем, вы получили WorkID!");
                user.addHistory(0, 'Получил WorkID');
                user.save();

                quest.role0();
                quest.standart();
            } catch (e) {
                methods.error(e);
            }
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
//#region Виклик події
function Events() {
    // Меню ресепшена.
    mp.events.add('wixcore::security::module::factions:cityhall:menu:list:reception', (idx, canFree) => {
        try {
            showMenuReception();
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:cityhall:menu:list:reception]', error);
        }
    });
    // Меню службового транспорту.
    mp.events.add('wixcore::security::module::factions:cityhall:menu:list:parkings', (data) => {
        try {
            showMenuParkings(data);
        } catch (error) {
            mp.game.ui.notifications.show(`~r~Произошла неизвестная ошибка`);
            // Потрібно зробити утиліту запису помилки у файл.
            methods.debug('[wixcore::security::module::factions:cityhall:menu:list:parkings]', error);
        }
    });
}
//#endregion

export default plugin;