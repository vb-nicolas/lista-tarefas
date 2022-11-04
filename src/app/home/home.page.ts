import { Component } from '@angular/core';
import { Tarefa } from '../model/tarefa';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private tarefas : Tarefa[] = [];

  constructor(private tarefasService : TarefasService) {
    this.tarefas = tarefasService.buscaTarefas();
  }

  toggleConcluida(tarefa : Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

}
