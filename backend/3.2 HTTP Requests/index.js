import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req ,res) => 
{
    res.send('<h1>Hello Welcome to my Website</h1>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>+91 8943442</h1>');
});