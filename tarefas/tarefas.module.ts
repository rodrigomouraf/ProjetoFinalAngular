import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasRoutingComponent } from './tarefas-routing.component';
 
@NgModule({
  declarations: 
    [
      ListarTarefaComponent, 
      CadastrarTarefaComponent, 
      EditarTarefaComponent,
      TarefasRoutingComponent, 
      TarefaConcluidaDirective
    ],
  imports: [
    CommonModule,
    RouterModule,
    TarefasRoutingModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ],
})
export class TarefasModule { }
