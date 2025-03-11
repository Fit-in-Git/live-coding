export const roleCheck = (targetRole) => {
    /*
    Das ist übliche Praxis in Express-Middleware, dass eine Funktion
    eine andere Funktion zurückgibt. Die innere Funktion ist die
    eigentliche Middleware und hat Zugriff auf Request- und Response-Objekt
    */
   return function roleCheckMiddleware(req, res, next){
        try {
            if (!req.user.roles) return res.status(401).json({msg: "Fehlende Nutzerinformationen!"});
            const hasRights = targetRole.includes(req.user.roles);
            if (!hasRights){
                return res.status(403).json({msg: "Nicht autorisiert!"})
            }
            next();
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: "Serverfehler!"});
        }
   }
}