import express from "express";
import multer from "multer";
import { uploadImage } from "./controller.js";

const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/", upload.single("image"), uploadImage);

export default router;
