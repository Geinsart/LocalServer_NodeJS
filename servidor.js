const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
console.log(req.url, req.method);


//definindo o tipo de conteúdo do cabeçalho
// res.setHeader('Tipo-conteudo', 'texto/simples');


//escrevendo a resposta 
// res.write('<head><link rel="stylesheet" href="#"></head>')
// res.write('<h1>ola pessoal</h1>')
// res.write('<p>ola pessoal, de novo</p>')
// res.end();

//definindo conteúdo do cabeçalho com html
res.setHeader('tipo-Conteudo', 'texto/html');

let caminho = './views/'

switch(req.url){
    case'/':
        caminho += 'index.html';
        res.statusCode = 200;
        break;
    case '/sobre':
        caminho += 'sobre.html';
        res.statusCode = 200;
        break;
//redirecionamento
    case '/nossaempresa':
        res.statusCode = 301;
        res.setHeader('Location', '/sobre');
        break;

    default:
        caminho += '404.html'
        res.statusCode = 404;
        break;


}

//enviando um arquivo html
fs.readFile(caminho, (err, data) => {
    if(err) {
        console.log(err)
        res.end();
    } else {
       // res.write(data)
        res.end(data)
    }
} )
});

server.listen(3000, 'localhost',() =>{
    console.log("ouvindo requisição na porta 3000");
}) 