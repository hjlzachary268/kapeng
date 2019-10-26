SET NAMES UTF8;
USE restaurant;
CREATE TABLE food(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    category VARCHAR(8),
    fname VARCHAR(32),
    price INT
)