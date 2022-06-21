import  express  from "express";
import { addSkill, getAllSkills, deleteSkill, updateSkill } from "../controllers/skills.js";
const skillRouter = express.Router();




skillRouter.post("/", addSkill);

skillRouter.get("/", getAllSkills);
skillRouter.delete("/:id", deleteSkill);
skillRouter.put("/:id", updateSkill);
export default skillRouter;