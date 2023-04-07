"use strict";

module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        social: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        name_dating: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        age: {
            type: DataTypes.STRING(10),
            defaultValue: '01.01.1990',
            allowNull: false
        },
        national: {
            type: DataTypes.STRING(128),
            defaultValue: 'Русский',
            allowNull: false
        },
        money: {
            type: DataTypes.DOUBLE,
            defaultValue: '0',
            allowNull: false
        },
        money_bank: {
            type: DataTypes.DOUBLE,
            defaultValue: '0',
            allowNull: false
        },
        money_payday: {
            type: DataTypes.DOUBLE,
            defaultValue: '0',
            allowNull: false
        },
        money_crypto: {
            type: DataTypes.DOUBLE,
            defaultValue: '0',
            allowNull: false
        },
        money_donate: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        bank_card: {
            type: DataTypes.BIGINT(20),
            defaultValue: '0',
            allowNull: false
        },
        bank_owner: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        bank_pin: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        crypto_card: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        phone: {
            type: DataTypes.BIGINT(20),
            defaultValue: '0',
            allowNull: false
        },
        phone_type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        phone_bg: {
            type: DataTypes.STRING(512),
            defaultValue: 'https://i.imgur.com/v4aju8F.jpg',
            allowNull: false
        },
        walkie_buy: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        walkie_vol: {
            type: DataTypes.INTEGER(11),
            defaultValue: '10',
            allowNull: false
        },
        walkie_1: {
            type: DataTypes.STRING(8),
            defaultValue: '000.000',
            allowNull: false
        },
        walkie_2: {
            type: DataTypes.STRING(8),
            defaultValue: '000.000',
            allowNull: false
        },
        walkie_current: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        walkie_color: {
            type: DataTypes.STRING(32),
            defaultValue: 'rgba(233, 135, 46, 0.9)',
            allowNull: false
        },
        online_time: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        online_wheel: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        online_cont: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        online_contall: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        online_warn: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        online_lspd: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        reg_status: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        hp: {
            type: DataTypes.INTEGER(11),
            defaultValue: '100',
            allowNull: false
        },
        ap: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        skin: {
            type: DataTypes.TEXT,
            defaultValue: '',
            allowNull: true
        },
        partner: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        whitelist: {
            type: DataTypes.ENUM('Y', 'N'),
            defaultValue: 'N',
            allowNull: false
        },
        admin_level: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        helper_level: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        fraction_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rank: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rank_type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        is_leader: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        is_sub_leader: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        fraction_id2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rank2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rank_type2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        is_leader2: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        is_sub_leader2: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        family_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rankf: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rank_typef: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        is_leaderf: {
            type: DataTypes.BOOLEAN(4),
            defaultValue: '0',
            allowNull: false
        },
        is_sub_leaderf: {
            type: DataTypes.BOOLEAN(4),
            defaultValue: '0',
            allowNull: false
        },
        job: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        house_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        condo_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        apartment_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        yacht_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stock_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        business_id: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id1: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id3: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id4: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id5: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id6: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id7: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id8: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id9: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id10: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        car_id6_free: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        car_id7_free: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        car_id8_free: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        car_id9_free: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        car_id10_free: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        is_clock: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        mask: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        mask_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        torso: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        torso_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        gloves: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        gloves_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        leg: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        leg_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        hand: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        hand_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        foot: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        foot_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        accessorie: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        accessorie_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        parachute: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        parachute_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        armor: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        armor_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        decal: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        decal_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        body: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        body_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        hat: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        hat_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        glasses: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        glasses_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        ear: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        ear_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        watch: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        watch_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        bracelet: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        bracelet_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        tprint_o: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        tprint_c: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        tattoo: {
            type: DataTypes.STRING(10000),
            defaultValue: '[]',
            allowNull: false
        },
        weapon_1: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        weapon_1_ammo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        weapon_2: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        weapon_2_ammo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        weapon_3: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        weapon_3_ammo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        weapon_4: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        weapon_4_ammo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        weapon_5: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        weapon_5_ammo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '-1',
            allowNull: false
        },
        stats_strength: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_shooting: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_endurance: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_lung_capacity: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_flying: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_driving: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_psychics: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_lucky: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        stats_darknet: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        a_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        a_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        a_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        b_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        b_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        b_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        c_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        c_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        c_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        air_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        air_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        air_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        ship_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        ship_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        ship_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        taxi_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        taxi_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        taxi_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        law_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        law_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        law_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        med_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        med_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        med_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        marg_lic: {
            type: DataTypes.BOOLEAN(4),
            defaultValue: '0',
            allowNull: false
        },
        marg_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        marg_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        gun_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        gun_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        gun_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        biz_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        biz_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        biz_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        fish_lic: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        fish_lic_create: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        fish_lic_end: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        work_lic: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        work_date: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        work_lvl: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        work_exp: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rep: {
            type: DataTypes.INTEGER(11),
            defaultValue: '500',
            allowNull: false
        },
        eat_level: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1000',
            allowNull: false
        },
        water_level: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1000',
            allowNull: false
        },
        jail_time: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        jail_type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        med_time: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        med_type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        login_date: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        login_ip: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        reg_timestamp: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        reg_ip: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        role: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        warns: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        status_rp: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        status_media: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        wanted_level: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        wanted_reason: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        clipset: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        clipset_w: {
            type: DataTypes.STRING(128),
            defaultValue: 'default',
            allowNull: false
        },
        s_hud_speed: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        s_hud_speed_type: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        s_hud_temp: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        s_hud_bg: {
            type: DataTypes.FLOAT,
            defaultValue: '0.5',
            allowNull: false
        },
        s_hud_raycast: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_hud_restart: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        s_hud_cursor: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_hud_notify: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_hud_quest: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '4',
            allowNull: false
        },
        s_hud_keys: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_chat_font: {
            type: DataTypes.STRING(128),
            defaultValue: 'Gotham Pro Regular',
            allowNull: false
        },
        s_chat_font_s: {
            type: DataTypes.INTEGER(11),
            defaultValue: '12',
            allowNull: false
        },
        s_chat_font_w: {
            type: DataTypes.INTEGER(11),
            defaultValue: '400',
            allowNull: false
        },
        s_chat_font_o: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_chat_font_l: {
            type: DataTypes.INTEGER(11),
            defaultValue: '14',
            allowNull: false
        },
        s_chat_bg_s: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        s_chat_bg_o: {
            type: DataTypes.FLOAT,
            defaultValue: '0.5',
            allowNull: false
        },
        s_chat_opacity: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        s_chat_width: {
            type: DataTypes.INTEGER(11),
            defaultValue: '30',
            allowNull: false
        },
        s_chat_height: {
            type: DataTypes.INTEGER(11),
            defaultValue: '10',
            allowNull: false
        },
        s_chat_timeout: {
            type: DataTypes.INTEGER(11),
            defaultValue: '7',
            allowNull: false
        },
        s_voice_vol: {
            type: DataTypes.FLOAT,
            defaultValue: '1',
            allowNull: false
        },
        s_clipset: {
            type: DataTypes.STRING(32),
            defaultValue: '',
            allowNull: false
        },
        s_bind_do: {
            type: DataTypes.INTEGER(11),
            defaultValue: '71',
            allowNull: false
        },
        s_bind_inv: {
            type: DataTypes.INTEGER(11),
            defaultValue: '73',
            allowNull: false
        },
        s_bind_inv_world: {
            type: DataTypes.INTEGER(11),
            defaultValue: '192',
            allowNull: false
        },
        s_bind_seat: {
            type: DataTypes.INTEGER(11),
            defaultValue: '88',
            allowNull: false
        },
        s_bind_passanger: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_belt: {
            type: DataTypes.INTEGER(11),
            defaultValue: '88',
            allowNull: false
        },
        s_bind_lock: {
            type: DataTypes.INTEGER(11),
            defaultValue: '76',
            allowNull: false
        },
        s_bind_engine: {
            type: DataTypes.INTEGER(11),
            defaultValue: '66',
            allowNull: false
        },
        s_bind_phone: {
            type: DataTypes.INTEGER(11),
            defaultValue: '79',
            allowNull: false
        },
        s_bind_stopanim: {
            type: DataTypes.INTEGER(11),
            defaultValue: '122',
            allowNull: false
        },
        s_bind_voice: {
            type: DataTypes.INTEGER(11),
            defaultValue: '78',
            allowNull: false
        },
        s_bind_voice_radio: {
            type: DataTypes.INTEGER(11),
            defaultValue: '20',
            allowNull: false
        },
        s_bind_voice_walkie: {
            type: DataTypes.INTEGER(11),
            defaultValue: '89',
            allowNull: false
        },
        s_bind_voice_en: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_pnv: {
            type: DataTypes.INTEGER(11),
            defaultValue: '78',
            allowNull: false
        },
        s_bind_cloth: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_cloth2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_megaphone: {
            type: DataTypes.INTEGER(11),
            defaultValue: '66',
            allowNull: false
        },
        s_bind_firemod: {
            type: DataTypes.INTEGER(11),
            defaultValue: '66',
            allowNull: false
        },
        s_bind_fingerpoint: {
            type: DataTypes.INTEGER(11),
            defaultValue: '66',
            allowNull: false
        },
        s_bind_helicam: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_helicam_vision: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_helicam_lock: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_helilight: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_weapon_slot0: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_weapon_slot1: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_weapon_slot2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_weapon_slot3: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_weapon_slot4: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_weapon_slot5: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_all: {
            type: DataTypes.INTEGER(11),
            defaultValue: '48',
            allowNull: false
        },
        s_bind_animations_0: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_1: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_2: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_3: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_4: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_5: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_animations_6: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_veh_menu: {
            type: DataTypes.INTEGER(11),
            defaultValue: '50',
            allowNull: false
        },
        s_bind_player_menu: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_voice_reload: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_show_hud: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_bind_hud_pos: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_show_id: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_show_v_id: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        s_load_model: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        s_pos: {
            type: DataTypes.STRING(1024),
            defaultValue: '[]',
            allowNull: false
        },
        s_menu_sound: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '1',
            allowNull: false
        },
        s_menu_font: {
            type: DataTypes.STRING(512),
            defaultValue: 'Gotham Pro Regular',
            allowNull: false
        },
        s_menu_border: {
            type: DataTypes.INTEGER(11),
            defaultValue: '8',
            allowNull: false
        },
        s_menu_opacity: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1',
            allowNull: false
        },
        s_menu_color: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_menu_width: {
            type: DataTypes.INTEGER(11),
            defaultValue: '400',
            allowNull: false
        },
        s_menu_height: {
            type: DataTypes.INTEGER(11),
            defaultValue: '350',
            allowNull: false
        },
        s_map_house_b: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_map_house_f: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_map_condo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_map_yacht: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_map_tt: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_map_ghetto: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_map_spawns: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        s_mute_lvl: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        pos_x: {
            type: DataTypes.FLOAT,
            defaultValue: '0',
            allowNull: false
        },
        pos_y: {
            type: DataTypes.FLOAT,
            defaultValue: '0',
            allowNull: false
        },
        pos_z: {
            type: DataTypes.FLOAT,
            defaultValue: '0',
            allowNull: false
        },
        rotation: {
            type: DataTypes.FLOAT,
            defaultValue: '0',
            allowNull: false
        },
        st_order_atm_f: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_atm_d: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_drug_f: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_drug_d: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_lamar_f: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_lamar_d: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_lamarm_f: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_order_lamarm_d: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_death: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_kill: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_jail: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_crime: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_shoots: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_walk: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_run: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_drive: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_fly: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_swim: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_capt: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_capt_win: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_capt_m: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        st_capt_m_win: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_three: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_build: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_bus: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_photo: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_mail: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_taxi: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_gr6: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        job_truck: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rating_racer_mmr: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1000',
            allowNull: false
        },
        rating_racer_count: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rating_racer_win: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rating_duel_mmr: {
            type: DataTypes.INTEGER(11),
            defaultValue: '1000',
            allowNull: false
        },
        rating_duel_count: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        rating_duel_win: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        referer: {
            type: DataTypes.STRING(128),
            defaultValue: '',
            allowNull: false
        },
        promocode: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        parthner_promocode: {
            type: DataTypes.STRING(64),
            defaultValue: '',
            allowNull: false
        },
        vip_type: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        vip_time: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        quest_role_0: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        quest_standart: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        quest_gang: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        quests: {
            type: DataTypes.TEXT,
            defaultValue: '',
            allowNull: true
        },
        recepts: {
            type: DataTypes.STRING(1000),
            defaultValue: '[]',
            allowNull: false
        },
        achiv: {
            type: DataTypes.STRING(1000),
            defaultValue: '[]',
            allowNull: false
        },
        date_ban: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        count_aask: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        count_hask: {
            type: DataTypes.INTEGER(11),
            defaultValue: '0',
            allowNull: false
        },
        is_custom: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        is_take_vehicle: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        is_take_vehicle_2: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        is_online: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        donate_pack1: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        donate_pack2: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        donate_pack3: {
            type: DataTypes.BOOLEAN(1),
            defaultValue: '0',
            allowNull: false
        },
        rp_growth: {
            type: DataTypes.SMALLINT(6),
            defaultValue: '180',
            allowNull: false
        },
        rp_weight: {
            type: DataTypes.SMALLINT(6),
            defaultValue: '75',
            allowNull: false
        },
        rp_avatar: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        rp_character: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        rp_diseases: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        rp_distinctive_features: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        rp_qualities: {
            type: DataTypes.STRING(256),
            defaultValue: '',
            allowNull: false
        },
        rp_biography: {
            type: DataTypes.TEXT,
            defaultValue: '',
            allowNull: true
        },
    });
    return model;
};