DROP DATABASE IF EXISTS BaMaZoN_DB;

CREATE DATABASE BaMaZoN_DB;

USE BaMaZoN_DB;

CREATE TABLE products
(
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR (100) NOT NULL,
    department_name VARCHAR (100) NOT NULL,
    price DECIMAL NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Disneyland Promo Tickets", "Tickets", 10.00, 75);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Rosegold Ears", "Toys & Games", 50.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("RokuHD", "Electronics", 40.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Polaroid", "Camera & Photo", 70.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Super Mario", "Video Games", 10.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Pennywise Costume", "Clothes", 100.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Batman", "Movies & TV", 10.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Nintendo Classic", "Video Games", 10.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Sony A7R", "Camera & Photo", 3198.00, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Very Hungry Catterpillar", "Books", 7.19, 100);


