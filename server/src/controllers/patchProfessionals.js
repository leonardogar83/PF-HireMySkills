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
            const profesional = await professionals.update({ name: name }, { where: { id: id }});
            // console.log(profesional, 'profesional name');
        }
        if(description) {
            const profesional = await professionals.update({ description: description }, { where: { id: id }});
            // console.log(profesional, 'profesional name');
        }
        
        if(photo) {
            const profesional = await professionals.update({ photo: photo }, { where: { id: id }});
            // console.log(profesional, 'profesional photo');
        }
        if(email) {
            const profesionalRep = await professionals.findAll({ where: { email: email }})
            if(profesionalRep.length > 0) return res.send({ message: "profesional already exists" });
            // console.log(profesionalRep, 'profesional email');
            const profesional = await professionals.update({ email: email }, { where: { id: id }});
        }
        if(town) {
            const profesional = await professionals.update({ town: town }, { where: { id: id }});
            // console.log(profesional, 'profesional town');
        }
        if(state) {
            const profesional = await professionals.update({ state: state }, { where: { id: id }});
            // console.log(profesional, 'profesional town');
        }
        if(country) {
            const profesional = await professionals.update({ country: country }, { where: { id: id }});
            // console.log(profesional, 'profesional town');
        }
        if(contact) {
            const profesional = await professionals.update({ contact: contact }, { where: { id: id }});
            // console.log(profesional, 'USER contact');
        }
        if(portfolio) {
            const profesional = await professionals.update({ portfolio: portfolio }, { where: { id: id }});
            // console.log(profesional, 'profesional town');
        }
        if(skills) {
            console.log(skills, 'SKILLS');
            const profesional = await professionals.update({ skills: skills }, { where: { id: id }});
            // console.log(profesional, 'profesional town');
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