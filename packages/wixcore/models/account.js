"use strict"; // Created by ua.lifesheets on 25.07.2020.

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("account", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        social: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        serial: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        allow_stats: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        allow_acc: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        allow_acc_edit: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        admin_level: {
            type: DataTypes.INTEGER(2),
            defaultValue: '0',
            allowNull: false
        },
        reg_ip: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        reg_timestamp: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        token: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        hash_acc: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        discord_id: {
            type: DataTypes.STRING(512),
            defaultValue: '',
            allowNull: false
        },
        discord_email: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        donate_active: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        donate_wallet_1: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        donate_wallet_2: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        donate_wallet_3: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        wallet_card: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        wallet_qiwi: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        wallet_paypal: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        wallet_yandex: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        wallet_webmoneyWmr: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        wallet_webmoney: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        trade_block: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        money: {
            type: DataTypes.BIGINT(20),
            defaultValue: '0',
            allowNull: false
        },
        money_donate: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        }
    });
    return model;
};