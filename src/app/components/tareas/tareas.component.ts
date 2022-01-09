import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas:Tarea[]=[]
  nombreTarea=''
  constructor() { }

  ngOnInit(): void {
  }
  agregarTarea():any{
    //Crear un objeto Tarea
    const tarea:Tarea={
      nombre:this.nombreTarea,
      estado:false
    }
    //Agregar el objeto Tarea al array
    this.listaTareas.push(tarea)
    //resetear input
    this.nombreTarea=''
  }

  eliminarTarea(id:number):void{
    this.listaTareas.splice(id,1);
  }
  actualizarTarea(tarea:Tarea,id:number):void{
    this.listaTareas[id].estado=!tarea.estado
  }
}
