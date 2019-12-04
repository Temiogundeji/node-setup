const http = require('http');
const app =  require('./app');

const  server =  http.createServer(app);
app.set('port', process.env.PORT || 3000);
// const server = http.createServer((req, res) =>{
//     res.end('This is my first server response!');
// });
server.listen(process.env.PORT || 3000);