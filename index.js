const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public')));
app.use('/image', express.static(path.join(__dirname, 'image')));
app.use('/seasons', express.static(path.join(__dirname, 'seasons')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Calender.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Calender.html'));
});


app.get('/CurrentWeather.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'CurrentWeather.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


