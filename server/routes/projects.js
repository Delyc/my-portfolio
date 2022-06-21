import  express  from "express";
import { addProject, getAllProjects, getProjectById, deleteProject, updateProject } from "../controllers/project.js";
import {UploadMiddleware, cloudinaryConfig, fileUpload} from '../middlewares/upload.js'
const projectRouter = express.Router();




projectRouter.post("/",fileUpload.single('banner'), cloudinaryConfig, UploadMiddleware, addProject);

projectRouter.get("/", getAllProjects);
projectRouter.get("/:id", getProjectById);
projectRouter.delete("/:id", deleteProject);
projectRouter.put("/:id", updateProject);
export default projectRouter;