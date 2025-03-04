// Middleware zum Validieren des kompilierten ajv-Schemas

const validateRequest = (validateFn) => (req, res, next) => {
    const valid = validateFn(req.body); // Der Inhalt vom body wird von der kompilierten Funktion überprüft
    if (!valid){
        const errors = validateFn.errors.map(err => err.message) // Sind Fehler aufgetreten, werden sie in der "errors"-Eigenschaft gesammelt
        return res.status(400).json({errors});
    }
    next();
};

export default validateRequest;