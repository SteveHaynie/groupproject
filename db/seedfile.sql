drop table if EXISTS work_order_archive, work_orders, unit_table, messages, messages_archive, users;

CREATE TABLE users
(
id serial primary key,
first_name text,
last_name text,
password text,
email text,
administrator boolean,
unit_id INTEGER
);

CREATE TABLE messages
(
id SERIAL primary key,
user_id INTEGER REFERENCES users (id),
msg_discription text,
msg_created_at TIMESTAMP,
msg_notes text
);

CREATE TABLE messages_archive (
id Serial primary key,
user_id INTEGER REFERENCES users (id),
discription text,
notes text,
created_at text,
completed_at TIMESTAMP
);


CREATE TABLE unit_table
(
id serial primary key,
unit_number VARCHAR,
unit_type VARCHAR,
unit_bedrooms INTEGER,
unit_baths INTEGER,
unit_sq_footage INTEGER,
unit_rent FLOAT,
amenities text
);

CREATE TABLE work_orders (
id serial primary key,
unit_id INTEGER,
discription text,
created_at TIMESTAMP,
photo text
);

CREATE TABLE work_order_archive (
id serial primary key,
unit_id INTEGER,
discription text,
notes text,
created_at TIMESTAMP,
completed_at TIMESTAMP,
photo text
);

insert into users (
    first_name, last_name, password, email, administrator
)
values (
    boss, boss, boss, boss@.bosscom, true
);
