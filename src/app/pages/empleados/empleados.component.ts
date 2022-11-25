import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';
import { Router} from '@angular/router';
import { Empleado } from '../../interface/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados!: Empleado[] ;

  constructor(private _service: ServicioService,
    private router: Router) { }

  ngOnInit(): void {
    this._service.getAllEmpleados().subscribe(data =>{
      console.log(data)
      
    })
  }
/*
ngOnInit(): void {
    this._service.getEmpleado(1).subscribe(data =>{
      console.log(data)
    })
}
*/


getAllEmpleados() {
  this._service.getAllEmpleados().subscribe(Empleados => {
    console.log(Empleados);
  })
}

createEmpleados() {
  const Empleados = {
    name: 'Yaretzi',
    last_name: 'Perez',
    birthday: 'date: 2022/04/12'
  };
  this._service.createEmpleados(Empleados)
    .subscribe((newEmpleados) => {
      console.log(newEmpleados);
    });
}

updateEmpleados(){
  const Empleados = {
    id:'1',
    name:'Ana',
    last_name:'Guzman Bautista',
    birthday: 'date: 2021/07/12'
  };
  this._service.updateEmpleados(Empleados).subscribe(donald=>{
    console.log(donald);
  })
}

delateEmpleados(){
  this._service.delateEmpleados('1').subscribe(
    (data) =>{
      console.log(data);
    }
  )
}

}
