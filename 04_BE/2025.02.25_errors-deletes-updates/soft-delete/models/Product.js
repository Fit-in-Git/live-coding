import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Ein Name wird benötigt!"]
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: [true, "Ein Preis wird benötigt!"],
        min: [1, "Der Preis kann nicht kleiner als 1 sein!"]
    },
    deletedAt: {
        type: Date,
        default: null
    },
    stock: {
        type: Number,
        required: [true, "Ein Lagerbestand wird benötigt!"],
        min: [0, "Der Bestand kann nicht kleiner als 0 sein!"]
    },
    category: {
        type: String,
        enum: ["Elektronik", "Bekleidung", "Bücher", "Haushalt", "Nahrung", "Sonstiges"]
    }
}, {timestamps: true});

productSchema.methods.restore = function(){
    this.deletedAt = null;
    return this.save();
}

export const Product = model("Product", productSchema);