const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb+srv://marco:mordekai07@cluster0.fp95k.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const port = 3338;
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes)
app.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})