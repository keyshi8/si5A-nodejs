// inisialisasi modul http
const http = require('http')

// buat server
const server = http.createServer( ( req, res) => {
    //res.writeHead(200, { 'content-Type' : 'text/ html'});
    //res.write('selamat pagi');

    res.writeHead(200, { 'content-Type' : 'application/json'});

    if(req.url === '/dosen'){
        message = 'list data dosen';
        data =['ahmad', 'hafiz', 'widi'];

    } else if (req.url === '/mahasiswa'){
        message = 'list data mahasiswa';
        data =['jojo', 'cengkang', 'hades'];

    } else {
        message = 'tidak ditemukan';
        data =[];

    }

    res.write(JSON.stringify({
        'message' : message,
        'data'    : data,
        'status'  : 'succes'
    }));
    res.end();

});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`server berjalan di http://${host}:${port}`);
});