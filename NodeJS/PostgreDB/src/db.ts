import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

type Planet = {
  id: number;
  name: string;
};

type Planets = Planet[];

let planets = [
  { id: 1, name: "Mars" },
  { id: 2, name: "Saturn" },
];

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    image TEXT
    );

DROP TABLE IF EXISTS users

CREATE TABLE users (
id SERIAL NOT NULL PRIMARY KEY,
username TEXT NOT NULL,
password TEXT NOT NULL,
token TEXT
)

 `);

  await db.none(`INSERT INTO planets(name)VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES('Mars')`);
  await db.none(
    `INSERT INTO planets (username,password) VALUES ('dummy','dummy')`
  );
};
setupDb();

export { db };
