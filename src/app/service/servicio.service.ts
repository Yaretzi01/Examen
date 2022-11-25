import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Empleado } from '../interface/empleado';
import { Response } from '../interface/response.interface';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private api = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees';
  constructor(private http: HttpClient) { }

  /*
  loginForm(form: Empleado): Observable<Response>{
    let direccion = this.api + "/donald";
    return this.http.post<Response>(direccion,form);
  }*/
  //Buscador
  getEmpleado(page: number): Observable<Empleado[]>{
    let direccion = this.api + "/donald/" + page;
    return this.http.get<Empleado[]>(direccion);
  }
  
  getAllEmpleados(){
    const path=`${this.api}/donald/`;
    return this.http.get<Empleado[]>(path);
  }
  
  createEmpleados(Empleado:Empleado){
    const path=`${this.api}/donald/`;
    return this.http.post(path,Empleado);
  }
  
  updateEmpleados(Empleado:Empleado){
    const path=`${this.api}/donald/${Empleado.id}`;
    return this.http.put<Empleado>(path,Empleado);
  }
  
  delateEmpleados(id: String){
    const path =`${this.api}/donald/${id}`;
    return this.http.delete(path);
  }
}
