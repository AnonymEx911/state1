let { loadEMS } = require('./plugins/ems');
let { loadCityHall } = require('./plugins/cityhall');

let factions = exports;

factions.init = () => {
    loadCityHall();
    loadEMS();
}