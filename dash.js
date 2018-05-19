function graficar () {
        // Usuario actual
        var number = 0;

        // Abre conexión bi-direccional con el servidor
        var socket = io();

        // En el momento en que llegue un mensaje del tópico 'chat message' ejecuta la función
        socket.on('stream', function(msg){

            // Agrega un nuevo mensaje a la lista de mensajes
            var message = msg.split(';@')[0];
            $('#stream-data').prepend($('<li>').text('Data: ' + message + ' time: ' + new Date()));
                        window.scrollTo(0, document.body.scrollHeight);
        });
}
