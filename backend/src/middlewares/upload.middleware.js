import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: "community_collab",
        allowed_formats: ["jpg", "png", "mp4", "mov"],
    },
});

const upload = multer({ storage });

export default upload;
