const socketio = require('socket.io');
const parseStringAsArray =  require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');
const { connection } = require('mongoose');
let io;
const connections = [];

exports.setupWebsocket = (server) => {
   io = socketio(server);

    //escutando o protocolo websocket
    io.on('connection', socket => {
        const {latitude, longitude, techs} = socket.handshake.query;
        connections.push({
            id:socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs),
        })       
    })
};


exports.findConnections = (coordinates, techs) => {
    //filtros
    return connections.filter(connection => {
        return calculateDistance(coordinates, connection.coordinates) < 10 && connection.techs.some(item => techs.includes(item))
        //some retorna um verdadeiro
    })
}

exports.sendMessage= (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data)
    })
}