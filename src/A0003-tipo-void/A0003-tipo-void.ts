function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Lorran',
  sobrenome: 'Dias',


  exibirNome(): void {
    console.log(this.nome+' '+ this.sobrenome)
  }
};

semRetorno('Lorran', 'Dias');
pessoa.exibirNome();


export {pessoa};
