import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Tarefa } from '../model/tarefa';
import { TarefasService } from '../service/tarefas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private tarefas : Tarefa[] = [];

  private tarefa : Tarefa = new Tarefa();

  constructor(private tarefasService : TarefasService,
    private toastController : ToastController) {

  }

  buscaTarefas() {
    this.tarefasService.buscaTarefas().then(t => {
      this.tarefas = t;
    })
  }
  
  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: 'Tarefa salva com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  toggleConcluida(tarefa : Tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }

  salva() {
    this.tarefasService.addTarefa(this.tarefa).then(() => {
      this.buscaTarefas();
      this.exibeMensagem();
    });
    
      
  }

}
