let request = require('request');
let axios = require('axios')
let queryString = require('querystring')
const url = 'https://cryptic-retreat-41638.herokuapp.com/api/contacts';
const api = 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts';

module.exports.show = (req, res) => {
	axios.default.get(api)
		.then(response => {
			res.render('contacts/show', { contacts: response.data })
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		})
}
module.exports.renderFormRegister = (req, res) => {
	return res.render('contacts/register');
},

module.exports.renderFormUpdate = (req, res) => {
	const { id } = req.params

	axios.default.get(`${api}/${id}`)
		.then(response => {
			if(response.data)
			res.render('contacts/update', {
				contact: {id, ...response.data}
			});
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		})
}
module.exports.store = (req, res) => {
	let contact = {
		name: req.body.name,
		email: req.body.email,
		gender: req.body.gender,
		phone: req.body.phone
	}
	axios.post(api, contact)
		.then((response) => {
			if (response.data) {
				return res.redirect('/contacts');
			}
			res.sendStatus(500);
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)			
		});
}

module.exports.search = async (req, res) => {
	await res.redirect('/contacts' + req.body.id)
}

module.exports.destroy = (req, res) => {
	const { id } = req.params
	axios.default.delete(`${api}/${id}`)
		.then(response => {
			if(response.data) return res.sendStatus(204)
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		})
}

module.exports.getContactById = (req, res) => {
	const { id } = req.params
	axios.default.get(`${api}/${id}`)
		.then(response => {
			if(response.data){
				res.render('contacts/contact', {
					contact: response.data
				})
			}
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema no: ${error}</h1>`)
		})
}

module.exports.renderSearch = (req, res) => {
	res.render('contacts/search', {})
}

module.exports.update = (req, res) => {
	let contact = {
		id: req.body._id,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone
	}
	axios.default.put(`${api}/${req.body.custId}`, contact)
		.then(response => {
			return res.redirect(`/contacts`);
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		})
}


