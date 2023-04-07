CREATE TABLE IF NOT EXISTS `promocode_top_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `promocode` varchar(64) NOT NULL DEFAULT '',
  `start` varchar(512) NOT NULL DEFAULT '{"money":1000}',
  `end` varchar(512) NOT NULL DEFAULT '{"money":25000}',
  `is_one` tinyint(1) NOT NULL DEFAULT 0,
  `is_use` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

INSERT INTO `promocode_top_list` (`id`, `promocode`, `start`, `end`, `is_one`, `is_use`) VALUES 
(1, 'REGISTER', '{"money":1000, "vip":10, "vipt": 2}', '{"money":24000}', 0, 0);