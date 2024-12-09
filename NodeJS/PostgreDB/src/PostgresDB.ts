import pgPromise from "pg-promise";
import { Request, Response } from "express";

export const db = pgPromise()(
  "postgres://postgres:postgres@localhost:5432/postgres"
);

const setupDb = async () => {
  await db.none(`
    DROP TABLE IF EXISTS planets;

    CREATE TABLE planets (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL
    );
 `);

  await db.none(`INSERT INTO planets(name)VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES('Mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);
};
setupDb();

