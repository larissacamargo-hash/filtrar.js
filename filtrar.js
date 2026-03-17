const usuarios = [
    {nome: "Carlos", idade:32 },
    {nome: "Ana", idade:28 },
    {nome: "Felipe", idade:40 },
];

// encontando um objeto 
const ana = usuarios.find(usuario => usuario.nome === "Ana");
console.log(ana);

// filtrando objetos
const usuarioAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);
console.log(usuarioAcimaDe30);

// odenando objetos por idade
const usuarioOrdenandosPorIdade = usuarios.sort((a, b) => a.idade - b.idade);
console.log(usuarioOrdenandosPorIdade);