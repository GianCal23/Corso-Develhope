import { Request, Response } from "express";
import Joi from "joi";
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
    name TEXT NOT NULL
    );
 `);

  await db.none(`INSERT INTO planets(name)VALUES ('Earth')`);
  await db.none(`INSERT INTO planets (name) VALUES('Mars')`);
  await db.none(`INSERT INTO planets (name) VALUES ('Jupiter')`);
};
setupDb();

const getAll = (req: Request, res: Response) => {
  const planets = db.many(`SELECT * FROM planets`);
  res.status(200).json(planets);
};

const getOneById = (req: Request, res: Response) => {
  const { id } = req.params;
  const planet = planets.find((p) => p.id === Number(id));
  res.status(200).json(planet);
};

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

const create = async (req: Request, res: Response) => {
  const { name } = req.body;
  const newPlanet = { name };
  const validateNewPlanet = planetSchema.validate(newPlanet);

  if (validateNewPlanet.error) {
    return res
      .status(400)
      .json({ msg: validateNewPlanet.error.details[0].message });
  } else {
    await db.none(`INSERT INTO planets(name)VALUES ($1)`, name);
    res.status(201).json({ msg: "The planet was created!" });
  }
};

const updateById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
  res.status(200).json({ msg: "Planet updated!" });
};

const deleteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  await db.none(`DELETE FROMplanets WHERE id=$1`, Number(id));
  res.status(200).json({ msg: "Planet deleted!" });
};

export { getAll, getOneById, create, updateById, deleteById };
