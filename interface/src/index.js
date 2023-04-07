import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Noty from 'noty';
import './assets/css/notice.css';
import "../node_modules/noty/lib/noty.css";
import "animate.css"

import EventManager from "./EventManager";

EventManager.addHandler('notify', value => {
    notify(value.type, value.layout, value.text, value.time)
});

Noty.setMaxVisible(3);

function notify(type, layout, message, time, theme) {
    var types = [
        'alert', 'error', 'success', 'information', 'warning'
    ];

    var layouts = [
        'top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 
        'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight'
    ];
    
    var style = [ 
        '<div class="icons"><img src="//staterp.wixcore.net/exports/notify/alert.svg"></div>', 
        '<div class="icons"><img src="//staterp.wixcore.net/exports/notify/error.svg"></div>',
        '<div class="icons"><img src="//staterp.wixcore.net/exports/notify/success.svg"></div>',
        '<div class="icons"><img src="//staterp.wixcore.net/exports/notify/alert.svg"></div>',
        '<div class="icons"><img src="//staterp.wixcore.net/exports/notify/warning.svg"></div>'
    ]
    
    let notifyText = 'Информация!';

    switch (theme) {
        case 'error':
            notifyText = 'Ошибка!';
            break;
        case 'warning':
            notifyText = 'Предупреждение!';
            break;
        case 'info':
            notifyText = 'Информация!';
            break;
        case 'success':
            notifyText = 'Успешно!';
            break;
        default:
            break;
    }

    switch (type) {
        case 0:
            notifyText = 'Информация!';
        break;
        case 1:
            notifyText = 'Ошибка!';
        break;
        case 2:
            notifyText = 'Успешно!';
        break;
        case 3:
            notifyText = 'Предупреждение!';
        break;
        default:
            // WixCore.Net
        break;
    }
    message = '<div class="new_notify">' + style[type] + '<div class="descript">' + message + '</div></div>';

    new Noty({
        type: types[type],
        layout: layouts[layout],
        theme: theme || 'wixcore',
        text: message,
        timeout: time,
        progressBar: true,
        animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
        }
    }).show();
}

setInterval(function () {
    try {
        mp.trigger('client:ui:checker'); // eslint-disable-line
    }
    catch (e) {
    }
}, 1000);

// notify(0, 1, 'Видимо произошла какая-то непредвиденная ошибка ', 10000);
// notify(1, 1, 'Видимо произошла какая-то непредвиденная ошибка', 10000);
// notify(2, 1, 'Видимо произошла какая-то непредвиденная ошибка', 10000);
// notify(3, 1, 'Видимо произошла какая-то непредвиденная ошибка', 10000);

ReactDOM.render(<App/>, document.getElementById('staterp'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (document.getElementById('disableZoom') === undefined) {
    if (window.outerWidth > 1900)
        document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
    else
        document.getElementsByTagName('body')[0].style.zoom = 1;

    window.onresize = () => {
        if (window.outerWidth > 1900) {
            document.getElementsByTagName('body')[0].style.zoom = +(Math.sqrt(window.outerWidth ** 2 + window.outerHeight ** 2) / 2202.9071700822983).toFixed(3);
        } else {
            document.getElementsByTagName('body')[0].style.zoom = 1;
        }
            
    };
} else {
    document.getElementsByTagName('body')[0].style.zoom = 1;
}

    
