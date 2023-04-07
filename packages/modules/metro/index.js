let methods = require('../methods');
let user = require('../../user');
let config = require('./config');

let plugin = exports;

plugin.loadMetro = () => {
    Blips();
    Checkpoints();
}

function Blips() {
    try {
        config.forEach(arg => {
            methods.createBlip(arg, 36, 0, 0.7, 'Метрополитен');
        });
    } catch (error) {
        methods.debug('[Metro-Blips]', e.message);
    }
}

function Checkpoints() {
    try {
        config.forEach(arg => {
            methods.createCpVector(arg, 'Нажмите ~g~E~s~ чтобы открыть меню.', 0.5, -1, [139, 195, 74, 100]);
        });
    } catch (error) {
        methods.debug('[Metro-Checkpoints]', e.message);
    }
}

function Colshapes(player) {
    try {
        config.forEach(arg => {
            if (methods.distanceToPos(arg, player.position) < 1.4) {
                player.call('wixcore::security::modules::metro:checkpoints');
                return;
            }
        });
    } catch (error) {
        methods.debug('[Metro-Colshapes]', e.message);
    }
}

mp.events.addRemoteCounted("onKeyPress:E", (player) => {
    if (!user.isLogin(player)) {
        return;
    }
    try {
        Colshapes(player);
    } catch (error) {
        methods.debug('[Metro-Events]', e.message);
    }
});