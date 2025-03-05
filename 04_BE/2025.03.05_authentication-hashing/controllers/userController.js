import { User } from "../models/User.js";

export const createUser = async(req, res)=>{
    try {
        const user = new User(req.body);
        console.log(user.password);
        
        /*
        An dieser Stelle ist unser Passwort noch ungehashed. Das hashen passiert in 
        der nächsten Zeile mit save(). Daraufhin wird die Funktion userSchema.pre im 
        Model aufgerufen und bcrypt erledigt seine Arbeit.
        */
       const response = await user.save();
       res.status(201).json({data: response})
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

export const loginUser = async (req, res)=>{
    try {
        const {email, password} = req.body;
        // Zuerst finden wir den User anhand der E-Mail
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).json({msg: "Benutzer wurde nicht gefunden!"})
        }
        /*
        Hier rufen wir die methods.authenticate Funktion auf. Beachten, dass wir die Methode auf die Instanz (user) und nicht auf das Model (User = großgeschrieben) anwenden. Als Ergebnis bekommen wir true oder false zurück.
        */
       const isPasswordCorrect = await user.authenticate(password);
       if (isPasswordCorrect){
        // An dieser Stelle ist der User erfolgreich authentifiziert
        return res.status(200).json({msg: "Erfolgreich eingeloggt!"})
       }
       /*
       Wenn die Passwort-Validierung fehlschlägt, geben wir den Status 401 = unauthorized zurück
       */
      return res.status(401).json({msg: "Die Anmeldedaten sind fehlerhaft!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
}