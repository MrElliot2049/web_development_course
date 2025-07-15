import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const d = new Date();
    const day = d.getDay();

    res.render("index.ejs", { day: day });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});