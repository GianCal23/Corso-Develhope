import express from "express";
import morgan from "morgan";
import {
  getAll,
  getOneById,
  create,
  updateById,
  deleteById,
} from "./controllers/planets";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/planets", getAll);
app.get("/api/planets/:id", getOneById);

app.post("/api/planets", create);

app.put("/api/planets/:id", updateById);

app.delete("/api/planets/:id", deleteById);

app.listen(process.env.PORT || 3000, () => {
  console.log("Serving on https://Localhost:3000");
});
