let config = {};

config.cityhall = {
    peds: [
        ['a_f_y_business_01', -555.716247559, -185.6759490966797, 38.2210655212403, -153.42, 'WORLD_HUMAN_STAND_IMPATIENT', '', 0, 0],          // Ресепшн.
        ['s_m_m_security_01', -562.005859375, -173.7471160888672, 38.1336555480957, 21.51, 'WORLD_HUMAN_GUARD_STAND', '', 0, 0],                // Парковка.
    ]
}
 
config.ems = {
    'paleto': {
        death: new mp.Vector3(-259.3686218261719, 6327.6416015625, 31.420677185058594),
        peds: [
            ['s_f_y_scrubs_01', -246.97201538085938, 6320.427734375, 32.42073440551757801, 312.1, 'WORLD_HUMAN_STAND_IMPATIENT', '', 0, 0],     // Ресепшн.
            ['s_m_m_security_01', -283.9298095703125, 6321.70751953125, 32.40444564819336, -47.83, 'WORLD_HUMAN_GUARD_STAND', '', 0, 0],        // Парковка.
        ],
        dialog: [-246.97201538085938, 6320.427734375, 32.42073440551757801, 312.1]
    },
    'pillbox': {
        death: new mp.Vector3(320.7169494628906, -584.0098876953125, 42.28400802612305),
        peds: [
            ['s_f_y_scrubs_01', 309.55218505859375, -593.9552612304688, 43.28400802612305, 34.04, 'WORLD_HUMAN_STAND_IMPATIENT', '', 0, 0],     // Ресепшн 1.
            ['s_f_y_scrubs_01', 349.2425231933594, -587.8432006835938, 28.796838760375977, -108.64, 'WORLD_HUMAN_STAND_IMPATIENT', '', 0, 0],   // Ресепшн 2.
            ['s_m_m_security_01', 315.5782470703125, -559.717529296875, 28.761301040649414, -78.15, 'WORLD_HUMAN_GUARD_STAND', '', 0, 0],       // Парковка.
        ],
        dialog: [
            [309.55218505859375, -593.9552612304688, 43.28400802612305, 34.04],
            [349.2425231933594, -587.8432006835938, 28.796838760375977, -108.64],
        ]
    },
    'sandy': {
        death: new mp.Vector3(1827.4207763671875, 3676.67138671875, 33.27007293701172),
        peds: [
            ['s_f_y_scrubs_01', 1838.4437255859375, 3682.33544921875, 34.2700538635253901, 162.7, 'WORLD_HUMAN_STAND_IMPATIENT', '', 0, 0],     // Ресепшн.
            ['s_m_m_security_01', 1823.7664794921875, 3688.929443359375, 34.22428894042969, 28.99, 'WORLD_HUMAN_GUARD_STAND', '', 0, 0],        // Парковка.
        ],
        dialog: [1838.4437255859375, 3682.33544921875, 34.2700538635253901, 162.7]
    },
    'zonan': {
        death: new mp.Vector3(-432.0573425292969, -332.1520690917969, 33.91075897216797),
        peds: [
            ['s_f_y_scrubs_01', -435.302734375, -323.8680725097656, 34.91077423095703, 161.804, 'WORLD_HUMAN_STAND_IMPATIENT', '', 0, 0],        // Ресепшн.
            ['s_m_m_security_01', -421.27081298828125, -347.6512756347656, 24.224529266357422, 107.01, 'WORLD_HUMAN_GUARD_STAND', '', 0, 0],     // Парковка.
        ],
        dialog: [-435.302734375, -323.8680725097656, 34.91077423095703, 161.804]
    },
    'army': {
        death: new mp.Vector3(556.9434204101562, -3125.037841796875, 17.76858139038086)
    }
}

export default config;