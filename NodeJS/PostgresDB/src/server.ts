import express from "express";
import morgan from "morgan";
import multer from "multer";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
  createImg,
} from "./controllers/planets";

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

app.put("/api/planets/:id/image", upload.single("image"), createImg);

app.listen(process.env.PORT || 3000, () => {
  console.log("Serving on https://Localhost:3000");
});
