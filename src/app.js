const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

// public static path
const static_path = path.join(__dirname, '../public');
// console.log(static_path)
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));

// routin
app.get('/', (req, res) => {
  res.render('index.hbs');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/weather', (req, res) => {
  res.render('weather.hbs');
});

app.get('*', (req, res) => {
  res.render('404error.hbs', {
    errorMsg: 'Ops! Page Not Found',
  });
});
app.listen(port, () => {
  console.log(`Listen the port no is ${port}`);
});
