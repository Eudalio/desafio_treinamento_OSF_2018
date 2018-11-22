const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./src/routes');

const app = express();

app.set("views", __dirname + '/src/views')
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes);

app.listen(3000, () => {
    console.log('Server listening on port 3000')
})