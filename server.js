const express = require('express');
const app = express();
var path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const fs = require('fs');

require('dotenv').config();

app.use(express.static("public"));

const directoryPath = path.join(__dirname, '/public');
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach((file) => {
        if (file.endsWith('.html') && file != 'index.html') {
            app.get('/' + file.slice(0, -5), (req, res) => {
                res.sendFile(path.join(__dirname + '/public/' + file));
            })
        }
    });
});

io.on('connection', (socket) => {
    socket.on('index', (data) => {
        io.emit('index', data);
    });
    socket.on('disconnect', () => {
        console.log('User has disconnected.');
    });
});

// env
http.listen(process.env.PORT || 3000, () => {
    console.log('App is listening...')
})
