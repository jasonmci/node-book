const http = require('http');
const app = http.createServer();
app.on('request',(req,res) => {
    var body = [];
    req.on('data', (bodyData) => {
      body.push(bodyData);  
    });
    req.on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(`Request Body Contents: ${body}`);
    })
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Welcome!</h1>");
}).listen(3000);