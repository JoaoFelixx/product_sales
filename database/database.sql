CREATE DATABASE nove_graus;

USE nove_graus;

CREATE TABLE sales(
  product_name VARCHAR(15) NOT NULL,
  product_value VARCHAR(10) NOT NULL,
  product_amount VARCHAR(4) NOT NULL,
  product_sale_date VARCHAR(20) NOT NULL,
  product_form_of_payment ENUM('pix','cartão','dinheiro')
);

CREATE TABLE dividends(
  dividend_name VARCHAR(20) NOT NULL,
  dividend_value VARCHAR(7) ,
  dividend_amount VARCHAR(4) ,
  dividend_form_of_payment ENUM('pix','cartão','dinheiro')
)