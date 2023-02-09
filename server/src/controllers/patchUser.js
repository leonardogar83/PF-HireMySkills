const users = require("../models/users.js");

const patchUser = async (req, res) => {
  const { id } = req.params;
  const { name, photo, town, email, contact, token } = req.body;
  try {
    const user = "";
    if (name && photo && town && email && contact) {
      const user = await users.update(
        {
          name: name,
          photo: photo,
          town: town,
          email: email,
          contact: contact,
          token: token,
        },
        { where: { id: id } }
      );
      // console.log(user, 'USER');
      return user;
    }
    if (name) {
      await users.update({ name: name }, { where: { id: id } });
    }
    if (photo) {
      await users.update({ photo: photo }, { where: { id: id } });
    }
    if (email) {
      const userRep = await users.findAll({ where: { email: email } });
      if (userRep.length > 0)
        return res.send({ message: "User already exists" });
      await users.update({ email: email }, { where: { id: id } });
    }
    if (town) {
      await users.update({ town: town }, { where: { id: id } });
    }
    if (contact) {
      await users.update({ contact: contact }, { where: { id: id } });
    }
    if (token) {
      await users.update({ token: token }, { where: { id: id } });
    }

    res.send({ message: "Modified user" });
  } catch (error) {
    res.send({ message: error.message });
  }
};

module.exports = { patchUser };
