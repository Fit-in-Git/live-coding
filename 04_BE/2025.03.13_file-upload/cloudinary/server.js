import express from "express";
import connectDB from "./libs/dbConnect.js";
import cors from "cors";
import { cloudinary } from "./config/cloudinary.js";


const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json({limit:"10mb"}));
app.use(express.urlencoded({extended:true}))

app.post("/images", async(req, res)=>{
  try {
      const name = Date.now();
      const uploadedImage = await cloudinary.uploader.upload(req.body.image, {
        upload_preset: "demo123", // Name des Cloudinary-Presets
        public_id: name,
        allowed_formats: ["jpg", "png", "jpeg", "gif", "svg"]
      },
      function(error, result){
        if (error) console.log(error);
        console.log({result});
      }
    );

    /*
    Bei erfolgreichem Upload können wir auf zwei Werte zugreifen:
    secure_url und public_url
    Die secure_url ist der vollständige Pfad zum Bild bei Cloudinary
    Die public_url ist der Teil den wir beim Löschen benötigen. Dieser
    sollte in der Datenbank gespeichert werden. Wir nutzen hier zu Demo-Zwecken
    die secure_url, diese sollte aber nicht an den Client geschickt werden
    */
   const cloudImg = uploadedImage.secure_url;
   const cloudImgPub = uploadedImage.public_id;
   console.log({cloudImg, cloudImgPub});
   res.status(200).json({msg:"Ok", cloudImg, cloudImgPub})
   
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Serverfehler"});
  }
});

app.delete("/images/:name", async(req, res)=>{
  try {
    await cloudinary.uploader.destroy(req.params.name, (error, result)=>{
      if (error){
        console.log("Fehler beim Löschen des Bildes!", error);
      } else {
        console.log("Bild wurde gelöscht!", result);
      }
      res.status(204).end();
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({msg: "Serverfehler"});
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
});
