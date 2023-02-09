const Profession = require("../models/profession.js");

const professionals = require("../models/professionals.js");
// ruta traer toda la data
const getDBInfo = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const get = await professionals.findAll({
        include: [
          {
            model: Profession,
            attributes: {
              attributes: ["Profession"],
            },
          },
        ],
      });
      // console.log(get, "GET");
      res.send(get);
    } else {
      const getname = await professionals.findAll();
      const filter = getname.filter(
        (e) => e.name.toLowerCase() === name.toLowerCase()
      );
      if (filter.deleted === false) return res.send(filter);
      else return res.send({ message: 'Profession not found' });
    }
  } catch (error) {
    res.send({ message: error });
  }
};
// ruta crear professional
const postcreateprofessional = async (req, res) => {
  const {
    name,
    description,
    photo,
    email,
    town,
    state,
    country,
    contact,
    portfolio,
    skills,
  } = req.body;
  // console.log(req.body, "::: es aqui");
  try {
    const repetido = await professionals.findOne({ where: { email: email } });
    if (repetido) return res.status(400).send("Professional already exists");

    // verificamos que se llene el formulario

    if (!name || !skills || !email || !town || !contact)
      return res.status(400).send("insert information");
    // se crea nuevo presta servicios
    const newProfes = await professionals.create({
      name,
      description,
      photo,
      email,
      town,
      state,
      country,
      contact,
      portfolio,
      skills,
    });
    const newProfesion = await Profession.findAll({
      where: { profession: skills },
    });
    newProfes.addProfession(newProfesion);

    res.send("created successfully");
  } catch (error) {
    res.send(error.message);
  }
};

const borradologico = async (req, res) => {
  const { id } = req.params;
  try {
    // buscamos si se encuentra ya eliminado
    const idexiste = await professionals.findByPk(id);
    console.log(idexiste.deleted, 'PROFFFF');
    if(idexiste.deleted === true) {
      await professionals.update({ deleted: false }, { where: { id: id } });
      res.send({ message: 'Professional is active' });
    }
    if (idexiste.deleted === false) {
      await professionals.update({ deleted: true} , { where: { id: id } });
      res.send({ message: 'Professional is already deleted' });
    } 
  } catch (error) {
    res.send(error);
  }
};
module.exports = {
  getDBInfo,
  postcreateprofessional,
  borradologico,
};
