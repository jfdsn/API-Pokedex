
CREATE TABLE IF NOT EXISTS pokemon (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    tipo TEXT,
    img TEXT,
    date timestamp default now()
);


INSERT INTO pokemon (nome, tipo, img)
    VALUES ('Pikachu', 'Elétrico', '../upload/imgs/pikachu.png');