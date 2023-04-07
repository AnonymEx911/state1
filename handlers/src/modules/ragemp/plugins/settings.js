"use strict";

import weather from "../../../manager/weather";

let pauseMenuNameStyle = () => {
    // Цвет вкладок.
    mp.game.invoke('0xF314CF4F0211894E', 143, 255, 165, 0, 255);
    // Цвет настроек.
    mp.game.invoke('0xF314CF4F0211894E', 116, 255, 165, 0, 255);
    // Названия карты.
    mp.game.gxt.set('PM_PAUSE_HDR', 'WELCOME TO THE WIXCORE | FREE VERSIONS'); 
}

let pauseMenuСharacter = () => {
    // Проверяем на ESC меню.
    if (!mp.game.ui.isPauseMenuActive()) return;
    // Задаем значения на вывод.
    const nameServer = 'wixcore.net'.toUpperCase();
    const serverDate = weather.getRealDate()+'/2023';
    const serverTime = weather.getRealTime();
    // Меню персонажа, аватарка и время.
    mp.game.graphics.beginScaleformMovieMethodOnFrontend("SET_HEADING_DETAILS");
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(nameServer);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(serverDate);
    mp.game.graphics.scaleformMovieMethodAddParamTextureNameString(serverTime);
    mp.game.graphics.scaleformMovieMethodAddParamBool(false);
    mp.game.graphics.endScaleformMovieMethod();
}

mp.events.add('playerReady', pauseMenuNameStyle);
mp.events.add('render', pauseMenuСharacter);