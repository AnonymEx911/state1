"use strict";

/**
 * @Name Підключення до ORM Sequelize для MySQL.
 * @description Модуль для підтримки активних та відкладених завантажень.
 * @support https://sequelize.org/docs/v6/
 * @author Mykola Dovhopol (ua.lifesheets).
 * @copyright Copyright (C) 2023 WixCore.Net
 */

const Sequelize = require('sequelize');
const fs = require("fs");
const path = require('path');

module.exports = {
  sequelize: null,
  model: {},
  connect: function (callback) {
    // Дані для підключення до бази даних.
    this.sequelize = new Sequelize(mp.conf.mysql.connect[2], mp.conf.mysql.connect[3], mp.conf.mysql.connect[4], {
      host: mp.conf.mysql.connect[0],
      dialect: "mysql",
      port: mp.conf.mysql.connect[1] || 3306,
      logging: mp.conf.mysql.logging,
      pool: {
        max: mp.conf.mysql.pool[0],
        min: mp.conf.mysql.pool[1],
        acquire: mp.conf.mysql.pool[2],
        idle: mp.conf.mysql.pool[3]
      },
      dialectOptions: {
        connectTimeout: mp.conf.mysql.timeout
      },
      define: {
        timestamps: mp.conf.mysql.stamps
      }
    });
    // Перевіряємо наявність підключення до бази даних.
    this.sequelize.authenticate().then(() => {
      this.loadModels();
      callback();
    }).catch((error) => {
      console.error(`${'\x1b[31m'}[ERROR]${'\x1b[35m'} Failed to connect to database:${'\x1b[0m'}`, error.message);
    });
    console.log(`${'\x1b[32m'}[DONE]${'\x1b[0m'} Database connection successfully.`);
  },
  loadModels: function () {
    var root = path.dirname(__dirname);
    // Отримуємо список плагінів.
    fs.readdirSync(root + '/models/').forEach(file => {
      // Відносний шлях моделі бази даних.
      var listModels = root + '/models/' + file;
      // Підключаємо моделі до масиву.
      var model = require(listModels)(this.sequelize, Sequelize.DataTypes);
      // Записуємо список моделей до нашого загального масиву.
      this.model[model.name] = model;

      console.log(file);
    });
    // Перебрати список моделей.
    for (var name in this.model) {
      var model = this.model[name];
      if (model.associate) {
        model.associate(this.model);
      }
    }
    // Створює таблицю, якщо вона не існує
    this.sequelize.sync();
  }
}