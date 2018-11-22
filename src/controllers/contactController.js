var request = require('request');
var axios = require('axios')
const url = 'https://cryptic-retreat-41638.herokuapp.com/api/contacts';
const url2 = 'https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts';

module.exports = {
	async show (req, res) {
		axios.default.get(url2)
		.then(response => {
			let dados = response.data
			//console.log(dados)
			res.render('contacts/show', { contacts: dados })
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		 })
	},
	renderFormRegister (req, res) {
		return res.render('contacts/register');
	},
	async renderFormUpdate (req, res) {
		const { id } = req.params

		await axios.default.get(`${url2}/${id}`)
		.then(response => {
			//console.log('update: ' + response.data);
			res.render('contacts/update', {
				contact: response.data
			});
		})
		.catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		})
	},
	async store (req, res) {
		const { name, email, phone, gender } = req.body
		
		var content = {
			"name": name,
			"email": email,
			"phone": phone,
			"gender": gender
		}

		await request({
			uri: url2,
			json: content,
			method: 'POST',
		},
		(err, response, body) => {
			//console.log(body);
			//console.log(response.statusCode);
			return res.redirect('contacts')
		});
	},
	async update(req, res) {
		const { name, email, phone, gender } = req.body
		console.log('update params: ' + req.body)
		console.log('update params: ' + req.params)
		await request({
			uri: `${url2}/${req.params.id}`,
			method: 'PUT',
			json: {
				"name": name,
				"email": email,
				"phone": phone,
				"gender": gender
			}
		}, (err, response, body) => {
			console.log(response.data)
			return res.redirect('contacts')
		})
	},
	async destroy(req, res) {
		const { id } = req.params
		//await request.delete(`${url}/${id}`)
		await axios.default.delete(`${url2}/${id}`).then(response => {
			//console.log(response.data)
			return res.redirect('/contacts');
		}).catch(error => {
			res.send(`<h1>Aconteceu o seguinte problema: ${error}</h1>`)
		})
	}
}