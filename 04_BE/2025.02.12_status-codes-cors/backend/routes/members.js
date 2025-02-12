import { Router } from "express";
import fs from "fs";

const membersRouter = Router();

membersRouter
    .get("/", (req, res)=>{
        try {
            const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
            res.status(200).json({data:data.members})
        } catch (error) {
            res.status(500).json({msg:"Serverfehler"});
        }
    })
    .get("/details/:id", (req, res)=>{
        try {
            res.status(301).json({msg: "Dieser Endpunkt wurde dauerhaft verlegt", newLocation: "/members/info/:id"})
        } catch (error) {
            res.status(500).json({msg:"Serverfehler"});
        }
    })
    .get("/:id", (req, res)=>{
        try {
            const {id} = req.params;
            const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));
            const member = data.members.find(member=>member.id === +id)
            if (!member) return res.status(404).json({msg: "Member nicht gefunden!"});
            res.status(200).json(member)
        } catch (error) {
            res.status(500).json({msg:"Serverfehler"});
        }
    })
    .post("/", (req, res)=>{
        try {
            const {name, email} = req.body;
            const data = JSON.parse(fs.readFileSync("./data.json", "utf8"));

            const newMember = {id:data.members.length + 1, name, email};
            data.members.push(newMember);
            fs.writeFileSync("./data.json", JSON.stringify(data));
            res.status(201).json({newMember});
        } catch (error) {
            console.log(error);   
            res.status(500).json({msg:"Serverfehler"});
        }
    })


export default membersRouter;