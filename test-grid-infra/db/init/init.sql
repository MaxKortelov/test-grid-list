CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
DROP TABLE IF EXISTS users;

CREATE TABLE users (
                          id SERIAL PRIMARY KEY,
                          uuid varchar DEFAULT uuid_generate_v4(),
                          email varchar DEFAULT '',
                          password varchar DEFAULT '',
                          username varchar DEFAULT '',
                          date_created DATE DEFAULT CURRENT_DATE,
                          date_updated DATE DEFAULT CURRENT_DATE
);

INSERT INTO users (email, password, username, date_created, date_updated)
VALUES ('admin@test.com', 'admin', 'admin', '2023-05-11 20:21', '2023-05-11 20:21'),
       ('m@m', '111', 'test', '2023-05-11 20:21', '2023-05-11 20:21'),
       ('test@test.com', 'test', 'test', '2023-05-11 20:21', '2023-05-11 20:21');

