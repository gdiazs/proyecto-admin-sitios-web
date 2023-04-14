CREATE TABLE PRODUCT(
    ID UUID PRIMARY KEY,
    NAME VARCHAR (255) NOT NULL,
    DESCRIPTION VARCHAR (255) NOT NULL,
    QUANTITY NUMBER DEFAULT 0,
    IMAGE_URL VARCHAR(255)
);

INSERT INTO PRODUCT (ID, NAME, DESCRIPTION, QUANTITY, IMAGE_URL)
VALUES('87ea4492-d99d-11ed-afa1-0242ac120002', 'Sillas', 'Silla Gamer', 10, '/images/silla1.jpg');

INSERT INTO PRODUCT (ID, NAME, DESCRIPTION, QUANTITY, IMAGE_URL)
VALUES('e9538202-d99d-11ed-afa1-0242ac120002', 'Ratón PC', 'Ratón de computadora', 7, '/images/raton.jpg');

INSERT INTO PRODUCT (ID, NAME, DESCRIPTION, QUANTITY, IMAGE_URL)
VALUES('81caa20e-da61-11ed-afa1-0242ac120002', 'Ratón Gamer', 'Ratón de computadora', 7, '/images/raton.jpg');

INSERT INTO PRODUCT (ID, NAME, DESCRIPTION, QUANTITY, IMAGE_URL)
VALUES('88c70c6e-da61-11ed-afa1-0242ac120002', 'Teclado Gamer', 'Teclado de computadora', 7, '/images/teclado.jpg');

INSERT INTO PRODUCT (ID, NAME, DESCRIPTION, QUANTITY, IMAGE_URL)
VALUES('a06c59a0-da61-11ed-afa1-0242ac120002', 'Monitor 22"', 'Monitor LG', 7, '/images/monitor.jpg');