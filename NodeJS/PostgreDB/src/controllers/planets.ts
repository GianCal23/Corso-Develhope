import { Request, Response } from "express";
import Joi from "joi";
import { db } from "../db";

const getAll = async (req: Request, res: Response) => {
  try {
    const planets = await db.many(`SELECT * FROM planets`);
    res.status(200).json(planets);
  } catch (error) {
    res.status(500);
    console.error(" getAll erorr");
  }
};

const getOneById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const planet = await db.oneOrNone(
      `SELECT* FROM planets WHERE id=$1;`,
      Number(id)
    );
    res.status(200).json(planet);
  } catch (error) {
    res.status(500);
    console.error("getOneById error");
  }
};

const planetSchema = Joi.object({
  name: Joi.string().required(),
});

const create = async (req: Request, res: Response) => {
  try {
    const newPlanet = req.body;
    const validateNewPlanet = planetSchema.validate(newPlanet);
    await db.none(`INSERT INTO planets(name)VALUES ($1)`, newPlanet.name);
    res.status(201).json({ msg: "The planet was created!" });
  } catch (error) {
    res.status(400);
    console.error("create error");
  }
};

const updateById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await db.none(`UPDATE planets SET name=$2 WHERE id=$1`, [id, name]);
    res.status(200).json({ msg: "Planet updated!" });
  } catch (error) {
    res.status(501);
    console.error("updateById error");
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await db.none(`DELETE FROMplanets WHERE id=$1`, Number(id));
    res.status(200).json({ msg: "Planet deleted!" });
  } catch (error) {
    res.status(501);
    console.error("deleteById error");
  }
};

const createImg = async (req: Request, res: Response) => {
  try {
    console.log(req.file);
    const { id } = req.params;
    const fileName = req.file?.path;
    if (fileName) {
      db.none(`UPDATE planets SET image=$2 WHERE id=$1`, [id, fileName]);
      res.status(201).json({ msg: "Planet image uploaded successfully" });
    }
  } catch (error) {
    res.status(400);
    console.error("createImg error");
  }
};

export { getAll, getOneById, create, updateById, deleteById, createImg };
