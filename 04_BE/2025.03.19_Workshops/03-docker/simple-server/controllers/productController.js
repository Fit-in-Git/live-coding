export const createProduct = async (req, res) => {
    res.status(201).json({msg: "Produkt erstellt!"})
};

export const getAllProducts = async (req, res) => {
    res.status(200).json({msg: "Alle Produkte gefunden!"})
}