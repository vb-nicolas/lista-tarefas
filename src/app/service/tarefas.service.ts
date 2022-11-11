import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

import { Tarefa } from '../model/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  private _storage : Storage | null = null;

  constructor(private storage : Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async buscaTarefas() : Promise<Tarefa[]> {
    return this._storage?.get("listaTarefas").then(l => {
      let lista : Tarefa[] = [];
      if (l == null)
        return lista;

      for (let t of l) {
        let tarefa : Tarefa = new Tarefa();
        tarefa.descricao = t.descricao;
        tarefa.concluida = t.concluida;
        tarefa.dataLimite = t.dataLimite;
        tarefa.id = t.id;
        tarefa.prioridade = t.prioridade;

        lista.push(tarefa);
      }

      return lista;
    });
  }

  public async addTarefa(tarefa : Tarefa) {
    return this._storage?.get("listaTarefas").then((l) => {
      let tarefas = [];
      if (l != null)
        tarefas = l;

      tarefas.push(tarefa);
      return this._storage?.set("listaTarefas", tarefas);
    });
  }

}
