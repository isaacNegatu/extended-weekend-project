CREATE DATABASE "pet_hotel"

CREATE TABLE "owners" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(25) NOT NULL,
    "numberOfPets" INTEGER NOT NULL
);

INSERT INTO "owners" ("name", "numberOfPets")
