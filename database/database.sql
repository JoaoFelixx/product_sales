CREATE DATABASE product_sales;

USE product_sales;

CREATE TABLE sales(
  _id INT,
  name VARCHAR(15) NOT NULL,
  value VARCHAR(10) NOT NULL,
  amount VARCHAR(4) NOT NULL,
  sale_date VARCHAR(20) NOT NULL,
  form_of_payment ENUM('pix','cartão','dinheiro'),

  PRIMARY KEY (product_id)
);