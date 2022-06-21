import  express  from "express";
import { addTestimony, getTestimony } from "../controllers/testimony.js";
import {UploadMiddleware, cloudinaryConfig, fileUpload} from '../middlewares/upload.js'
const testimonyRouter = express.Router();




testimonyRouter.post("/",fileUpload.single('banner'), cloudinaryConfig, UploadMiddleware, addTestimony);

testimonyRouter.get("/", getTestimony);

export default testimonyRouter;