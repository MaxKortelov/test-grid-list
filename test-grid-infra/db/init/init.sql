CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "record";

CREATE TABLE "user" (
                          id SERIAL PRIMARY KEY,
                          uuid varchar DEFAULT uuid_generate_v4(),
                          email varchar DEFAULT '',
                          password varchar DEFAULT '',
                          username varchar DEFAULT '',
                          date_created DATE DEFAULT CURRENT_DATE,
                          date_updated DATE DEFAULT CURRENT_DATE
);

CREATE TABLE record
(
    id      serial
        constraint "PK_5cb1f4d1aff275cf9001f4343b9"
            primary key,
    name    varchar default ''::character varying         not null,
    status  varchar default 'OPEN'::character varying     not null,
    role    varchar default 'CUSTOMER'::character varying not null,
    address varchar default ''::character varying         not null,
    amount  integer default 0                             not null
);

alter table record
    owner to postgres;

INSERT INTO "user" (email, password, username, date_created, date_updated)
VALUES ('admin@test.com', 'admin', 'admin', '2023-05-11 20:21', '2023-05-11 20:21'),
       ('m@m', '111', 'test', '2023-05-11 20:21', '2023-05-11 20:21'),
       ('test@test.com', 'test', 'test', '2023-05-11 20:21', '2023-05-11 20:21');
insert into record (id, name, status, role, address, amount)
values (1, 'Max', 'OPEN', 'CUSTOMER', 'Ukraine', 2),
       (2, 'Max', 'CLOSE', 'ADMIN', 'Ukraine', 2),
       (3, 'Max', 'CLOSE', 'CUSTOMER', 'Warsaw', 2),
       (4, 'Alex', 'PENDING', 'BUSINESS', 'USA', 2),
       (5, 'Max', 'OPEN', 'CUSTOMER', 'Ukraine', 2),
       (6, 'Max', 'PENDING', 'ADMIN', 'Ukraine', 2),
       (7, 'Test', 'OPEN', 'CUSTOMER', 'Ukraine', 2),
       (8, 'Max', 'PENDING', 'BUSINESS', 'France', 2),
       (9, 'Max', 'OPEN', 'CUSTOMER', 'Ukraine', 2),
       (10, 'Max', 'PENDING', 'CUSTOMER', 'Ukraine', 2),
       (11, 'abasdf', 'OPEN', 'CUSTOMER', 'Ukraine', 2),
       (12, 'Max', 'PENDING', 'BUSINESS', 'Ukraine', 2),
       (13, 'Max', 'OPEN', 'ADMIN', 'Ukraine', 2),
       (14, 'Best', 'CLOSE', 'CUSTOMER', 'Ukraine', 2),
       (15, 'Max', 'PENDING', 'CUSTOMER', 'Ukraine', 2),
       (16, 'Max', 'OPEN', 'BUSINESS', 'Ukraine', 2),
       (17, 'Chris', 'OPEN', 'CUSTOMER', 'Italy', 2),
       (18, 'Max', 'OPEN', 'CUSTOMER', 'Ukraine', 2),
       (19, 'Max', 'PENDING', 'BUSINESS', 'Baly', 2),
       (20, 'Rob', 'CLOSE', 'CUSTOMER', 'Ukraine', 2),
       (21, 'Max', 'OPEN', 'ADMIN', 'Ukraine', 2),
       (22, 'Max', 'CLOSE', 'ADMIN', 'Ukraine', 2);

