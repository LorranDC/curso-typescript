//tipo tupla
const dadosCliente1: readonly [number, string] = [1, 'Lorran'];
const dadosCliente2: [number, string, string] = [1, 'Lorran', 'Dias'];
const dadosCliente3: [number, string, string?] = [1, 'Lorran'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Lorran', 'Dias'];


dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';



console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);


//readonly array
const array1: readonly string[] = ['Lorran', 'Dias'];
const array2: ReadonlyArray<string> = ['Lorran', 'Dias'];
