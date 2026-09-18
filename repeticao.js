const cliente = {
nome: "joao",
idade: 24,
emeil: "joao@firma.com",
telefone: ["115555550","114444440"],
};

cliente.enderecos = [
    {
rua:"R. joseph climber",
numero: 1337,
apartamento: true,
complemento: "ap 934",
 },
];

for (let chave in cliente) {
let tipo = typeof cliente[chave];
if (tipo !== "object" && tipo !== "funciton"){
console.log( `A chave ${chave} tem o valor ${cliente[chave]}`);
 }
}


