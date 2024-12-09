import * as dotenv from "dotenv";
dotenv.config();
import { Request, Response } from "express";
import { db } from "../db";
import jwt from "jsonwebtoken";

const logIn = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await db.one(
      `SELECT * FROM users WHERE username=$1`,
      username
    );

    if (user && user.password === password) {
      const payload = {
        id: user.id,
        username,
      };
      const { SECRET = "" } = process.env;
      const token = jwt.sign(payload, SECRET);

      console.log(token);

      await db.none(`UPDATE users SET token=$2 WHERE id=$1)`, [user.id, token]);
      res.status(200).json({ id: user.id, username, token });
    }
  } catch (error) {
    res.status(400).json({ msg: "Username or password incorrect." });
  }
};

const signUp = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const user = await db.oneOrNone(
      `SELECT * FROM users WHERE username=$1`,
      username
    );

    if (user) {
      res.status(409).json({ msg: "Username already in use." });
    } else {
      const { id } = await db.one(
        `INSERT INTO users (username,password) VALUES ($1,$2) RETURNING id`,
        [username, password]
      );
      res.status(201).json({ msg: "Users created successfully." });
    }
  } catch (error) {
    res.status(400);
    console.error("Signup failed.");
  }
};

const logOut = async (req: Request, res: Response) => {
  try {
    const user: any = req.user;
    await db.one(`UPDATE users SET token=$2 WHERE id=$1`, [user?.id, null]);
    res.status(200).json({ msg: "Logout successful." });
  } catch (error) {
    res.status(501);
  }
};

export { logIn, signUp, logOut };
