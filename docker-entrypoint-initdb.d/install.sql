drop table if exisits Customer cascade;
drop table if exisits Car cascade;
drop table if exisits Owns cascade;
drop table if exisits Phonenumbers cascade;

create sequence cust_id_seq;
create table Customer
(
	cust_id int DEFAULT nextval('cust_id_seq') NOT NULL,
	name VARCHAR(60) NOT NULL,
	address VARCHAR(256) NOT NULL,
	PRIMARY KEY (cust_id)
);

create sequence car_id_seq;
create table Car
(
	car_id int DEFAULT nextval('car_id_seq') NOT NULL,
	year VARCHAR(60) NOT NULL,
	make VARCHAR(60) NOT NULL,
	model VARCHAR(60) NOT NULL,
	cust_id int NOT NULL,
	PRIMARY KEY (car_id),
	FOREIGN KEY (cust_id) REFERENCES Customer(cust_id) ON DELETE CASCADE
);

create table Owns
(
	cust_id int NOT NULL,
	car_id int NOT NULL,
	PRIMARY KEY (car_id),
	FOREIGN KEY (cust_id) REFERENCES Customer(cust_id) ON DELETE CASCADE,
	FOREIGN KEY (car_id) REFERENCES Car(car_id) ON DELETE CASCADE
);

create table Phonenumbers
(
	phonenumber char(12) NOT NULL,
	cust_id int NOT NULL,
	PRIMARY KEY (phonenumber),
	FOREIGN KEY (cust_id) REFERENCES Customer(cust_id) ON DELETE CASCADE
);