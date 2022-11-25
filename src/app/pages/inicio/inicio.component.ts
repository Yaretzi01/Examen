import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ServicioService } from 'src/app/service/servicio.service';
import { Empleado } from 'src/app/interface/empleado';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  loginForm = new FormGroup({
    name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    birthday: new FormControl('', Validators.required)
  })

  constructor(private _servio : ServicioService) { }

  ngOnInit(): void {
  }

  onLogin(form: any){
   console.log(form);
    
  }
}
