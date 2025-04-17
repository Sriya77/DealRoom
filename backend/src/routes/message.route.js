import express from "express";
import { protectRoute } from "../middlewares/auth.middleware";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller";

const router = express.Router();

router.post("/users", protectRoute, getUsersForSidebar );
router.post("/:id", protectRoute, getMessages );
router.post("/send/:id", protectRoute, sendMessage );

export default router;