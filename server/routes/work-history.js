import  express  from "express";
import { addWorkHistory, getAllWorkHistory, updateWorkHistory} from "../controllers/workHistory.js";
const workRouter = express.Router();




workRouter.post("/", addWorkHistory);

workRouter.get("/", getAllWorkHistory);
// workRouter.delete("/:id", deleteEduc);
workRouter.put("/:id", updateWorkHistory);
export default workRouter;