CREATE DATABASE "pet_hotel"

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    owner_id integer REFERENCES owners(id),
    pet character varying(25),
    breed character varying(25),
    color character varying(25),
    "checkedIn" date
);
