import express from "express";
import morgan from "morgan";
import multer from "multer";
import authorize from "./controllers/authorize";
import "./passport";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImg,
} from "./controllers/planets";
import { logIn, signUp, logOut } from "./controllers/users";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);
app.post("/api/planets", create);
app.put("/api/planets/:id", updateById);
app.delete("/api/planets/:id", deleteById);

app.post("/api/planets/:id/image", upload.single("image"), createImg);

app.post("/api/user/login", logIn);
app.post("/api/user/signup", signUp);
app.post("/api/user/signup", authorize, logOut);

app.listen(process.env.PORT || 3000, () => {
  console.log("Serving on https://Localhost:3000");
});
