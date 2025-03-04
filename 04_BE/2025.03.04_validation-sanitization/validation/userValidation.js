import Ajv from "ajv";
import addFormats from "ajv-formats";
import addErrors from "ajv-errors";

// Ajv initialisieren

const ajv = new Ajv({allErrors:true}) // Alle Fehler berichten und nicht schon nach dem 1. Fehler abbrechen
addFormats(ajv);
addErrors(ajv);

const userSchema = {
    type: "object",
    properties: {
        name: {
            type:"string",
            minLength: 1,
            errorMessage: "Der Name muss aus mindestens einem Zeichen bestehen!"
        },
        email: {
            type: "string",
            format: "email",
            errorMessage: "Bitte eine gültige E-Mail eingeben! (from ajv)"
        },
        password: {
            type: "string",
            minLength: 8,
            maxLength: 30,
            pattern: "(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])",
            errorMessage:{
                minLength: "Das Passwort hat nicht die erforderliche Länge (8-30 Zeichen)!",
                maxLength:"Das Passwort hat nicht die erforderliche Länge (8-30 Zeichen)!",
                pattern: "Das Passwort muss aus Groß- und Kleinbuchstaben bestehen und mindestens eine Zahl enthalten"
            }
        },
        website: {
            type: ["string", "null"],
            pattern: "^$|^(https?://.+)$", // Leerer String oder valide URL
            nullable: true, // Erlaubt undefinded oder null
            errorMessage:{
                type: "Die Webseite muss ein String oder null sein!",
                pattern: "Die Webseite muss eine gültige URL enthalten!"
            }
        },
        location: {
            type: "string",
            enum: ["Deutschland", "Österreich", "Schweiz"],
            errorMessage: "Anmeldung nur in der DACH-Region möglich!"
        },
        blogposts: {
            type: "string",
            pattern: "^[0-9a-fA-F]{24}$", // ObjectId
            errorMessage: "Ungültige ObjectId!"
        }
    },
    required: ["name", "email", "password"],
    additionalProperties: false,
    errorMessage: {
        required: {
            name: "Bitte einen Namen eingeben!",
            email: "Bitte eine gültige E-Mail eingeben!",
            password: "Das Passwort ist erforderlich!"
        }
    }
};

const validateUser = ajv.compile(userSchema);

export default validateUser;