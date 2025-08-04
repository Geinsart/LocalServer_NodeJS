const http = require('http');

const server = http.createServer((req, res) => {
console.log("solicitação realizada")
})


server.listen(3000, 'localhost',() =>{
    console.log("ouvindo requisição na porta 3000")
})