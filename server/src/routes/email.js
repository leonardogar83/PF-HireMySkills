const Router = require("express");
const router = Router();
const {newUser,pago} = require("../controllers/email")


//Envia mail cuando el pago fue exitoso
router.post("/pagado", async (req, res) => {
    const { name, email } = req.body
    try {
        const data = await pago(name, email)
        res.status(200).json(data)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

//Envia mail cuando se crea usuario
router.post("/usuario", async (req, res) => {
    const { name, email } = req.body
    try {
        const data = await newUser(name, email)
        res.status(200).json("email sent")
    } catch (err) {
        res.status(404).send(err.message)
    }
})
   

module.exports= router