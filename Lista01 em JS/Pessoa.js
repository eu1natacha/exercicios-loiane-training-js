class Pessoa
{
    constructor(nome, altura, peso)
    {
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
    }

    darRisada(coisaPassada)
    {
        let listaDeCoisasQueFazemRir = ['o sapo não lava o pé', 'meu nome é fumiga', 'o que é o que é']

        if (listaDeCoisasQueFazemRir.includes(coisaPassada))
        {
            alert('Hahahahahahhaha!')
        }
        else
        {
            alert('Que sem graça')
        }
    }
}

/////////////////////////////////////////////////////////

let natacha = new Pessoa('Natacha', 1.77, 75);
const piadaPraNatacha = prompt("Fala alguma coisa aí pra Natacha rir");

renan.darRisada(piadaPraNatacha);