drop table if EXISTS work_order_archive, work_orders, unit_table, messages, messages_archive, users;

CREATE TABLE messages (
id SERIAL primary key,
user_id INTEGER REFERENCES users (id),
msg_discription VARCHAR(255),
msg_created_at TIMESTAMP,
msg_notes VARCHAR(255)
);

CREATE TABLE messages_archive (
id Serial primary key,
user_id INTEGER REFERENCES users (id),
discription VARCHAR(255),
notes VARCHAR(255),
created_at VARCHAR(255),
completed_at TIMESTAMP
);

CREATE TABLE users (
id serial primary key,
first_name VARCHAR(255),
last_name VARCHAR(255),
password VARCHAR(255),
email VARCHAR(255),
administrator boolean,
unit_id INTEGER(255)
);

CREATE TABLE unit_table (
id serial primary key,
unit_number VARCHAR,
unit_type VARCHAR,
unit_bedrooms INTEGER,
unit_baths INTEGER,
unit_sq_footage INTEGER,
unit_rent FLOAT,
amenities VARCHAR(255)
);

CREATE TABLE work_orders (
id serial primary key,
unit_id INTEGER,
discription VARCHAR(255),
created_at TIMESTAMP,
photo text
);

CREATE TABLE work_order_archive (
id serial primary key,
unit_id INTEGER,
discription VARCHAR(255),
notes VARCHAR(255),
created_at TIMESTAMP,
completed_at TIMESTAMP,
photo text
);



/*) default values inserted into tables (*/