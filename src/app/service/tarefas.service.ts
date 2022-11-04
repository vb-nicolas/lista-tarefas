import { Injectable } from '@angular/core';
import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private tarefas : Tarefa[] = [];

  constructor() { 
    this.tarefas.push(new Tarefa());
    this.tarefas[0].id = 1;
    this.tarefas[0].descricao = 'Instalar Node';
    this.tarefas[0].prioridade = 0;
    this.tarefas[0].dataLimite = '2022-11-30';
    
    this.tarefas.push(new Tarefa());
    this.tarefas[1].id = 2;
    this.tarefas[1].descricao = 'Configurar VS Code';
    this.tarefas[1].prioridade = 1;
    this.tarefas[1].dataLimite = '2022-11-03';
    
    this.tarefas.push(new Tarefa());
    this.tarefas[2].id = 3;
    this.tarefas[2].descricao = 'Corrigir a ordenação das tarefas';
    this.tarefas[2].prioridade = 2;
    this.tarefas[2].dataLimite = '2022-11-03';
  }

  public buscaTarefas() : Tarefa[] {
    return this.tarefas;
  }

}
