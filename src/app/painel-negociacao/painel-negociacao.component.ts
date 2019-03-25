import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';


@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidades = [
    //{ descricao: 'PROJETO  de desenov de ERP', nomeProspecto: 'Alisson', valor:1000 },
    // { descricao: 'Manutenção de CRM por 1 ano', nomeProspecto: 'Link', valor: 9000},
   ];

  constructor(private oportunidadeService: OportunidadeService) { }

  ngOnInit() {
    this.oportunidadeService.listar()
    .subscribe(resposta => this.oportunidades = <any> resposta)
  }

}
