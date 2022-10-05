CREATE SCHEMA pokedex;

CREATE TABLE IF NOT EXISTS pokemon {
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    tipo TEXT,
    img TEXT,
    date timestamp default now()
};