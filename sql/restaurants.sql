SET NAMES UTF8;
USE restaurant;
CREATE TABLE restaurants(
    rid INT PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(8),
    district VARCHAR(8),
    rname VARCHAR(8),
    address VARCHAR(32),
    tel INT
)