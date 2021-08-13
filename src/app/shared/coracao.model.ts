export class Coracao{

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio:string = '/assets/coracao_cheio.png', //atribui um valor default , feacture do ECMA6
        public urlCoracaoVazio:string = '/assets/coracao_vazio.png'
    ){}


    public exibiCoracao(): string {
        if(this.cheio){
            return this.urlCoracaoCheio
        }else{
            return this.urlCoracaoVazio
        }
    }
}