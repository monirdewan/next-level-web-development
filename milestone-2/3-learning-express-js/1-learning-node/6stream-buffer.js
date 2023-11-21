const http = require('http');
const fs = require("fs")

//create a server using raw node.js

const server = http.createServer();

//server listener

server.on('request', (req, res)=>{
    if(req.url==='/read-file' && req.method === 'HET');

    //streaming file reading
    const readableStream = fs.createReadStream(process.cwd()+'/text/read.txt')

    readableStream.on('data', (buffer)=>{
        res.statusCode = 200;
        res.write(buffer)
    })
    readableStream.on('end', ()=>{
        res.statusCode = 200;
        res.end("The streaming is over")
    })

    readableStream.on('error', ()=>{
        res.statusCode=500;
        res.end('Somethisg Went Wrong')
    })
   
})

server.listen(5000,()=>{
    console.log(`server is listining on port 5000`)
})