import UIMenu from '../menu';
import methods from '../methods';
import user from '../../user';
import conf from './config';

let plugin = {};

plugin.loadMetro = () => {
    Events();
}

function showMenuMetro() {
    if (methods.isBlackout()) {
        mp.game.ui.notifications.show(`~r~В городе отсутствует свет`);
        return;
    }
    UIMenu.Menu.Create(conf.skeleton.title, conf.skeleton.subtitle, 'metroTeleport', false, false);
    UIMenu.Menu.AddMenuItem(conf.navigation[1][0], conf.navigation[1][1], { doName: 'priceTicket1' });
    UIMenu.Menu.AddMenuItem(conf.navigation[2][0], conf.navigation[2][1], { doName: 'priceTicket2' });
    UIMenu.Menu.AddMenuItem(conf.navigation[3][0], conf.navigation[3][1], { doName: 'priceTicket3' });
    UIMenu.Menu.AddMenuItem(conf.navigation[4][0], conf.navigation[4][1], { doName: 'priceTicket4' });
    UIMenu.Menu.AddMenuItem(conf.navigation[5][0], conf.navigation[5][1], { doName: 'priceTicket5' });
    UIMenu.Menu.AddMenuItem(conf.navigation[6][0], conf.navigation[6][1], { doName: 'priceTicket6' });
    UIMenu.Menu.AddMenuItem(conf.navigation[7][0], conf.navigation[7][1], { doName: 'priceTicket7' });
    UIMenu.Menu.AddMenuItem(conf.navigation[8][0], conf.navigation[8][1], { doName: 'priceTicket8' });
    UIMenu.Menu.AddMenuItem(conf.navigation[9][0], conf.navigation[9][1], { doName: 'priceTicket9' });
    UIMenu.Menu.AddMenuItem(conf.navigation[10][0], conf.navigation[10][1], { doName: 'priceTicket10' });
    UIMenu.Menu.AddMenuItem("~r~Закрыть", "", { doName: 'closeMenu' });
    UIMenu.Menu.Draw();
    UIMenu.Menu.OnSelect.Add(async (item) => {
        UIMenu.Menu.HideMenu();
        var priceTicket = 100;
        if (item.doName == 'priceTicket1') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-1083.1515, -2721.0405, -7.530131);
            return;
        } else if (item.doName == 'priceTicket2') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-880.7977, -2311.3948, -11.852799);
            return;
        } else if (item.doName == 'priceTicket3') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-533.6171, -1267.0789, 26.78159);
            return;
        } else if (item.doName == 'priceTicket4') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(228.90434, -1204.3397, 38.782658);
            return;
        } else if (item.doName == 'priceTicket5') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-298.34442, -332.07004, 9.943094);
            return;
        } else if (item.doName == 'priceTicket6') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-815.8392, -134.33536, 19.8303);
            return;
        } else if (item.doName == 'priceTicket7') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-1355.7189, -465.03162, 14.925318);
            return;
        } else if (item.doName == 'priceTicket8') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-502.79358, -676.7152, 11.688962);
            return;
        } else if (item.doName == 'priceTicket9') {
            if (user.getMoney() < priceTicket) {
                mp.game.ui.notifications.show('~y~В вашем кошельке недостаточно денег.');
                return;
            }
            user.removeMoney(priceTicket, 'Проезд в метрополитене.');
            user.teleport(-207.57571, -1017.8509, 30.018295);
            return;
        } else if (item.doName == 'priceTicket10') {
            user.teleport(102.25202, -1714.7284, 29.992487);
            return;
        }
    });
}

function Events() {
    mp.events.add('wixcore::security::modules::metro:checkpoints', () => {
        showMenuMetro();
    });
}

export default plugin;