import { Component, OnInit } from '@angular/core';
import { OportunidadeService } from '../oportunidade.service';
//import { MessageService } from 'primeng/components/common/messageservice';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-painel-negociacao',
  templateUrl: './painel-negociacao.component.html',
  styleUrls: ['./painel-negociacao.component.css']
})
export class PainelNegociacaoComponent implements OnInit {

  oportunidade = {};
  oportunidades = [
    //{ descricao: 'PROJETO  de desenov de ERP', nomeProspecto: 'Alisson', valor:1000 },
    // { descricao: 'Manutenção de CRM por 1 ano', nomeProspecto: 'Link', valor: 9000},
   ];

  constructor(
    private oportunidadeService: OportunidadeService,
    private messageService: MessageService
    ) { }

  ngOnInit() {
    this.consultar();
  }

  consultar() {
    this.oportunidadeService.listar()
    .subscribe(resposta => this.oportunidades = <any> resposta)
  }

  adicionar() {
    this.oportunidadeService.adicionar(this.oportunidade).subscribe(() => {
      this.oportunidade = {};
      this.consultar();

      this.messageService.add({
        severity: 'sucsess',
        summary: 'Oportunidade adicionada com sucesso'
      });
    })
  }

}
