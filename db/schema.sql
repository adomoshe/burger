CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT(4) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(45) NOT NULL,
    devoured BOOLEAN NOT NULL,
    date_created DATETIME NOT NULL,
    PRIMARY KEY(id)
);