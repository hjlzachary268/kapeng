SET NAMES UTF8;
DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant CHARSET=UTF8;
USE restaurant;
CREATE TABLE user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(16) NOT NULL UNIQUE,
    avatar VARCHAR(128),
    user_name VARCHAR(32),
    gender BOOL,
    birthday BIGINT,
    reg_time BIGint,
    last_visit BIGINT,
    reward_points INT,
    ugrade INT
)
CREATE TABLE food(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(8),
    fname VARCHAR(32),
    price INT,
)