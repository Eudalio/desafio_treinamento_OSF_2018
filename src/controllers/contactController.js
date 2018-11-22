var request = require('request');
const url = 'https://cryptic-retreat-41638.herokuapp.com/api/contacts';

module.exports = {
	async show (req, res) {
		request.get(url, (error, response, body) => {
			let dados = JSON.parse(body)
			const { data } = dados
			return res.render('contacts/show', { contacts: data })
		})
	}
}