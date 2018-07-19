CREATE DATABASE "pet_hotel"

CREATE TABLE "pets" (
    "id" SERIAL PRIMARY KEY,
    "owner" VARCHAR(25) NOT NULL,
    "pet" VARCHAR (25) NOT NULL,
    "breed" VARCHAR(25),
    "color" VARCHAR (25) NOT NULL,
    "checkedIn" DATE NOT NULL
);

INSERT INTO "pets" ("owner", "pet", "breed", "color", "checkedIn")
VALUES ('Ross', 'Scamp', 'Dalmatian', 'white', '7/15/18'),
('Nanci', 'Lola', 'Goldendoodle', 'Gold', '7/16/18'),
('Liam', 'Cinnamon', 'Guinea Pig', 'Brown', '7/17/18'),
('Graham', 'Blaze', 'Betta Fish', 'Red', '7/18/18'),
('Graham', 'Max', 'Lizard', 'Green', '7/19/19');
