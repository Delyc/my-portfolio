import  express  from "express";
import { addEducation, getEducation, deleteEduc, updateEduc } from "../controllers/education.js";
const educationRouter = express.Router();




educationRouter.post("/", addEducation);

educationRouter.get("/", getEducation);
educationRouter.delete("/:id", deleteEduc);
educationRouter.put("/:id", updateEduc);
export default educationRouter;