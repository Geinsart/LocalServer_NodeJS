const nome = "Ana";
console.log(nome);

//execução de tempo limite 

setTimeout(() => {
        console.log("Executando no tempo limite")
}, 3000);


// intervalo definido 

const int = setInterval(() => {
    console.log("intervalo")
}, 1000);