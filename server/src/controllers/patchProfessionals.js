const professionals = require('../models/professionals.js');

const patchProfessionals = async (req, res) => {
    const { id } = req.params; 
    const { name, description, photo, email, town, state, country, contact, portfolio, skills } = req.body;
    try {
        const professional = '';
        if(name && description && photo && email && town && state && country && contact && portfolio && skills) {
            const profesional = await professionals.update({
                name: name,
                description: description,
                photo: photo,
                email: email,
                town: town,
                state: state,
                country: country,
                contact: contact,
                portfolio: portfolio,
                skills: skills
            })
            return profesional;
        }
        if(name) {
            await professionals.update({ name: name }, { where: { id: id }});
            
        }
        if(description) {
            await professionals.update({ description: description }, { where: { id: id }});
        }
        
        if(photo) {
            await professionals.update({ photo: photo }, { where: { id: id }});
        }
        if(email) {
            const profesionalRep = await professionals.findAll({ where: { email: email }})
            if(profesionalRep.length > 0) return res.send({ message: "profesional already exists" });
            // console.log(profesionalRep, 'profesional email');
            await professionals.update({ email: email }, { where: { id: id }});
        }
        if(town) {
            await professionals.update({ town: town }, { where: { id: id }});
        }
        if(state) {
            await professionals.update({ state: state }, { where: { id: id }});
        }
        if(country) {
            await professionals.update({ country: country }, { where: { id: id }});
        }
        if(contact) {
            await professionals.update({ contact: contact }, { where: { id: id }});
        }
        if(portfolio) {
            await professionals.update({ portfolio: portfolio }, { where: { id: id }});
        }
        if(skills) {
            
            await professionals.update({ skills: skills }, { where: { id: id }});
        }
        res.send({ message: 'Modified user' });
    } catch (error) {
        res.send({ message: error.message})
    }
};

module.exports = { patchProfessionals };



// {
//     "name": "Sergio",
//     "description": "Soy ",
//     "photo": "photo",
//     "email": "email@gmail.com",
//     "town": "Cordoba",
//     "state": "state",
//     "country": "country",
//     "contact": "",
//     "portfolio": "portfolio"
// }