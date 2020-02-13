/*
Navicat MySQL Data Transfer

Source Server         : dl
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : db

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2020-02-02 12:12:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `db_table`
-- ----------------------------
DROP TABLE IF EXISTS `db_table`;
CREATE TABLE `db_table` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(10) NOT NULL,
  `password` char(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of db_table
-- ----------------------------
INSERT INTO `db_table` VALUES ('1', 'dillonl', '14789');
INSERT INTO `db_table` VALUES ('2', 'Dillon.L', 'Y7Kuj8MUk3ifTPs');
INSERT INTO `db_table` VALUES ('3', 'Leader', '6xQhZZtZWuYpAzY');
