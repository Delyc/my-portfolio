import  express  from "express";
import {addEducation, getAchievements, updateAchieve, deleteAchieve } from "../controllers/achievements.js";
import {UploadMiddleware, cloudinaryConfig, fileUpload} from '../middlewares/upload.js'
const achievementRouter = express.Router();

achievementRouter.post("/",fileUpload.single('banner'), cloudinaryConfig, UploadMiddleware, addEducation);
achievementRouter.get("/", getAchievements);
achievementRouter.delete("/:id", deleteAchieve);
achievementRouter.put("/:id", updateAchieve);
export default achievementRouter;