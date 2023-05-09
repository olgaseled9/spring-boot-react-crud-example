DROP TABLE if exists user;

CREATE TABLE user
(
    user_id          BIGINT       NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstname          VARCHAR(100) NOT NULL,
    lastname           VARCHAR(100) NOT NULL,
    patronymic         VARCHAR(100) NOT NULL,
    birthday           DATE         NOT NULL,
    gender             VARCHAR(50)  NOT NULL
);

INSERT INTO user (firstname, lastname, patronymic, birthday, gender)
VALUES ('Sergei', 'Ivanov', 'Ivanovich', '1992-01-01',  'MALE'),
       ('Pavel', 'Pavlov', 'Petrovich', '1987-01-02', 'MALE'),
       ('Andrei', 'Smirnov', 'Petrovich', '2020-01-02', 'MALE'),
       ('Anna', 'Petrova', 'Ivanova', '2020-01-02', 'FEMALE'),
       ('Tania', 'Petrova', 'Ivanova', '2020-01-02', 'FEMALE');