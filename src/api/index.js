import express from "express";
import UploadRoutes from "./upload/route.js";

const router= express.Router();
router.use("/upload",UploadRoutes)

export default router;
