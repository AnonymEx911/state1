"use strict";

try {
    require('./staterp');
} catch (e) {
    mp.game.graphics.notify(`${e.toString()}`);
}