const users  = require('../models/users.js')


const createUser = async (req, res, next) => {
    try {
        const { name, photo, town, email, contact } = req.body;
        // console.log(req.body, 'BODY');
        const userFind = await users.findAll({ where: { email: email } });
        // console.log(userFind, 'REPETIDO');
        if(userFind.length) return res.send({ message: 'Cliente repit'});
        else {
            await users.create({ name, photo, email, town, contact });
        };
        res.send({ message: 'User create'});
    } catch (error) {
        res.send(error);
    };
};

module.exports = { createUser };



// {
//     "profession": "Marcos",
//     "photo": "caeciackla",
//     "description": "aeovinaeuvacvla",
//     "email": "marcos@gmail.com",
//     "town": "Gral Paz",
//     "contact": 74,
//     "profession": "Medico",
 //         "profession" : includes{
  //              modelo : profession 
//                    }
 //              
//   }  



// const createUsuario = async (req, res) => {
//     try {
//       // Obtener los datos del usuario
//       const { nombre, email } = req.body;
  
//       // Crear la profesión y la categoría asociadas
//       const profesion = await Profesion.create({
//         profesion: req.body.profesion.profesion,
//         categoria: {
//           typecategory: req.body.profesion.categoria.typecategory
//         }
//       }, {
//         include: [Categoria]
//       });
  
//       // Crear el usuario
//       const usuario = await Usuario.create({
//         nombre,
//         email,
//         profesionId: profesion.id
//       });
  
//       // Enviar la respuesta
//       res.status(201).json({
//         usuario,
//         profesion
//       });
//     } catch (error) {
//       res.status(500).json({
//         message: "Error al crear el usuario",
//         error
//       });
//     }
  //};