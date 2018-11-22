var request = require('request');
const url = 'https://cryptic-retreat-41638.herokuapp.com/api/contacts';

module.exports = {
	async show (req, res) {
		await request.get(url, (error, response, body) => {
			let dados = JSON.parse(body)
			const { data } = dados
			console.log(data)
			return res.render('contacts/show', { contacts: data })
		})
	},
	renderForm (req, res) {
		return res.render('contacts/register');
	},
	async store (req, res) {
		const { name, email, phone, gender } = req.body

		var content = {
			"name": name,
			"email": email,
			"phone": phone,
			"gender": gender
		}

		await request.post({
			uri: url,
			headers:{'content-type': 'application/x-www-form-urlencoded'},
			body:require('querystring').stringify(content)},
			(err, response, body) => {
					console.log(body);
					console.log(response.statusCode);
					this.show(req, res)
			});
	}
}