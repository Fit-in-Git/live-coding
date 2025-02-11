import {Router} from "express";

const feedbackRouter = Router();

let db = [{id:1, productId:1, msg:"Läuf wie geschmiert!"}]

feedbackRouter.
    get("/", (req, res)=>{
        res.json({data:db});
    })
    .post("/", (req, res)=>{
        db = [...db, {id:db.length+1, ...req.body}];
        res.json({data:db});
    })
    .put("/:id", (req, res)=>{
        const {id} = req.params;
        db = db.map(feedback=>feedback.id === parseInt(id) ? { ...feedback, ...req.body } : feedback);
        res.json({data:db})
    })

export default feedbackRouter;