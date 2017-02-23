### Schema

CREATE DATABASE lendowe_db;
USE lendowe_db;

CREATE TABLE user
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	mail varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	phone int(255) NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE iou
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	iou_id varchar(255) NULL,
	item varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	notification varchar(255) NOT NULL,
	notification_sent_at varchar(255) NOT NULL,
	notification_freq varchar(255) NOT NULL,
	email_sent_to varchar(255) NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

CREATE TABLE uom
(
	id int NOT NULL AUTO_INCREMENT,
	user_name varchar(255) NOT NULL,
	iou_id varchar(255) NULL,
	item varchar(255) NOT NULL,
	description varchar(255) NOT NULL,
	notification varchar(255) NOT NULL,
	notification_sent_at varchar(255) NOT NULL,
	notification_freq varchar(255) NOT NULL,
	email_sent_to varchar(255) NOT NULL,
	date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);