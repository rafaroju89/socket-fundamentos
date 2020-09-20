var socket = io();

//Escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Rafael',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//Escuch
socket.on('enviarMensaje', (mensaje) => {
    console.log('Servidor: ', mensaje);
});