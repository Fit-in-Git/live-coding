import {v2 as cloudinary} from "cloudinary";

/*
Der config-Methode übergeben wir ein paar Werte, die wir ins
zuvor von der cloudinary-Webseite geholt haben
 */

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export {cloudinary};