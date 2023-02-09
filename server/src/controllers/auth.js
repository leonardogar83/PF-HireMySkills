// const jwt = require('jsonwebtoken');
// const users  = require("../models/users.js")



// const protectAdminRoute = async (req, res, next) => {
//     try {
//       const token = req.header('Authorization').replace('Bearer ', '');
//       const decoded = jwt.verify(token, process.env.SECRET_KEY);
//       const user = await users.findByPk(decoded.userId);
  
//       if(user.role !== 'admin') return res.status(401).send({ error: 'Unauthorized' });
  
//       req.user = user;
//       next();
//     } catch (error) {
//       res.status(401).send({ error: 'Invalid token' });
//     }
//   };
  

//     const protectProfessionalRoute = async (req, res, next) => {
//         const token = req.header("Authorization").replace("Bearer ", "");
//         const data = jwt.verify(token, process.env.SECRET_KEY);
//         const user = await users.findOne({ where: { id: data.id } });
//         if (!user || (user.role !== "admin" && user.role === "professional"))
//         return res.status(401).send({ error: "Not authorized to access this resource" });
//         req.user = user;
//         next();
//         };


    
//     module.exports = {protectAdminRoute,protectProfessionalRoute}