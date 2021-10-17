CREATE DATABASE product_sales;

USE product_sales;

CREATE TABLE sales(
  product_id INT AUTO_INCREMENT,
  product_name VARCHAR(15) NOT NULL,
  product_value VARCHAR(10) NOT NULL,
  product_amount VARCHAR(4) NOT NULL,
  product_sale_date VARCHAR(20) NOT NULL,
  product_form_of_payment ENUM('pix','cartão','dinheiro'),

  PRIMARY KEY (product_id)
);