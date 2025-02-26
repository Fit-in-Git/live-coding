import { Router } from "express";
import { User } from "../models/User.js";

const userRouter = Router();

userRouter
    .get("/", async (req, res, next)=>{
        try {
            const response = await User.find();
            res.status(200).json({data:response});
        } catch (error) {
            next(error);
        }
    })
    /*
    Wollen wir uns mehr Infos über das referenzierte Model ausgeben, 
    könne wir die Methode "populate" benutzen. populate hängen wir an die jeweilige mongoose-Suchmethode an.
    Als Option übergeben wir ein Objekt und sagen hinter dem key "path", welches Feld die Referenz enthält
    */
   .get("/:id", async (req, res, next)=>{
        try {
            const {id} = req.params;
            /*
            Wenn wir await weglassen, bekommen wir ein Query-Objekt, das wir vor dem Ausführen noch weiter konfigurieren können
            */
            // const query = User.findById(id);

            // if (req.query.include === "posts"){
            //     query.populate("posts")
            // };

            // Das Query ausführen
            // const user = await query.exec();

            const query = await User.findById(id);
            let user;

            if (req.query.include === "posts"){
                // user = await User.findById(id).populate({path:"posts"});
                // Wir können auch nur einzelen Felder anzeigen lassen
                // user = await User.findById(id).populate({path:"posts", select:"content"});
                // Kurzschreibweise
                // user = await User.findById(id).populate("posts", "owner content");
                // Wir können einzelne Felder ausschließen
                user = await User.findById(id).populate("posts", "owner content -_id");
            } else {
                user = await User.findById(id);
            }

            res.status(200).json({data:user})
        } catch (error) {
            next(error);
        }
   })

export default userRouter;