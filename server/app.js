import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import projectRouter from "./routes/projects.js";
import testimonyRouter from "./routes/testimony.js";
import skillRouter from "./routes/skills.js";
import educationRouter from "./routes/education.js";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggeroptions } from "./config/base.js";
import achievementRouter from "./routes/achievement.js";
const swaggerOptionsUi = swaggerJSDoc(swaggeroptions);

const app = express();
app.use(express.json());
dotenv.config();

const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/documentation", swaggerUi.serve, swaggerUi.setup(swaggerOptionsUi));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.send("Welcome!");
});
app.use("/api/projects", projectRouter);
app.use("/api/testimony", testimonyRouter);
app.use("/api/skills", skillRouter)
app.use("/api/education", educationRouter)
app.use("/api/achievemt", achievementRouter)

mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection success");
    app.listen(port, () => console.log("server starting: ", port));
  })
  .catch((error) => console.log(error));
