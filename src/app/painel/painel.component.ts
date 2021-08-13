import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao:string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase!:Frase

  public progresso : number = 0

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void{
    //HTMLInputElement -> diz para o typescript que estamos querendo pegar o value de um HTML
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void{

    if (this.rodadaFrase.frasePtBr === this.resposta){
       //trocar pergunta da rodada
       this.rodada++    
       this.progresso = this.progresso + (100 / this.frases.length)
       console.log( this.progresso)
       this.atualizaRodada()
       alert('Traducao esta ok')
      
    }else{
      alert('Traducao falhou')
    }
   
  }

  public atualizaRodada():void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }

}
