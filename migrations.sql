CREATE DATABASE backbone_dash;

\c backbone_dash;

CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), message VARCHAR(255), size VARCHAR(255));