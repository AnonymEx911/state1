let vehicleInfo = exports;

vehicleInfo.feature = [];



// Загрузка транспортных средств.
vehicleInfo.loadAllFeature = async function() {
    var list = await mp.lib.mysql.model.vehfeature.findAll({
        attributes: ['id', 'display_name', 'class_name', 'class_name_ru', 'hash', 'stock', 'stock_full', 'fuel_full', 'fuel_min', 'fuel_type', 'type', 'price', 'sb', 'sm'],
        order: [['id', 'DESC'], ['display_name', 'ASC']],
    });
    if (list === null) return;
    list.forEach(arg => {
        vehicleInfo.feature.push(arg);
    });
    console.log(`[INFO] Vehicle specs loaded: [${vehicleInfo.feature.length}/${list.length}]`);
};