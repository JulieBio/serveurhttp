const express = require('express')
const app = express()

app.get('/', function (req, res) {
res.send('Bienvenue sur votre serveur !')
})
app.get('/contact', function (req, res) {
res.send('Nous ne sommes pas joignables pour le moment ! ')
})
app.get('/display/:user', function (req, res) {
const user = req.params.user;
console.log(user);
res.send('Vous tentez d’afficher le profil de ' + user)
});

app.listen(3000, function () {
console.log('Server is listening on port 3000 !')
})
