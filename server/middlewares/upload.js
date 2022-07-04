import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import multer from "multer";
import streamifier from "streamifier";

export const fileUpload = multer();

export const cloudinaryConfig = (req, res, next) => {
  cloudinary.config({
    url: process.env.CLOUDINARY_URL,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUDINARY_NAME,
  });
  next();
};

const streamUpload = (req) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream((error, result) => {
      if (result) {
        resolve(result);
      } else {
        reject(error);
      }
    });
    streamifier.createReadStream(req.file.buffer).pipe(stream);
  });

export const UploadMiddleware = async (req, res, next) => {
  const result = await streamUpload(req);
  console.log(result)
  if (result) {
    req.file.path = result.url;
    req.file.publicId = result.public_id;
    next();
  } else {
    return res.json({ message: "Image not uploaded" });
  }
};
