CREATE DATABASE "pet_hotel"

CREATE TABLE "owners" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25),
    "numberOfPets" INTEGER
);

INSERT INTO "owners" ("name", "numberOfPets")
VALUES ('Ross', 1),
('Nanci', 1),
('Liam', 1),
('Graham', 2);
