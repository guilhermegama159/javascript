
//EXEMPLO DE OBJETO:
let amigo1 = {Nome: "jonas", idade: 25, peso: 70.5, envelheceu(p){console.log(`depois de ${p} anos`);this.idade += p;}};

amigo1.envelheceu(5);
console.log(`Agora ${amigo1.Nome} tem ${amigo1.idade} anos`);

//EXEMPLO DO MESMO OBJETO MELHORADO PARA COMPREENSÃO E LEITURA:
let amigo2 = {
    Nome: "luiz",
    idade: 11,
    peso: 57.5,
    envelheceu(p){
    console.log(`depois de ${p} anos`);
    this.idade += p;
}};

amigo2.envelheceu(9);
console.log(`Agora ${amigo2.Nome} tem ${amigo2.idade} anos`);
