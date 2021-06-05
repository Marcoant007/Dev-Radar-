const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const http = require('http');
const {setupWebsocket} = require('./websocket');




const app = express();
const server = http.Server(app); //servidor http fora do express

setupWebsocket(server)


mongoose.connect('mongodb+srv://marco:mordekai07@cluster0.fp95k.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const port = 3338;
app.use(cors({origin: 'http://localhost:3000'}))
app.use(express.json());
app.use(routes)
server.listen(port, () => {
    console.log(`Servidor rodando na porta:${port}`)
})