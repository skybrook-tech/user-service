import express from "express";
import controllers from "../controllers";

const router = express.Router({ mergeParams: true });

// public
router.use("/v1/users", controllers.users);

export default router;
