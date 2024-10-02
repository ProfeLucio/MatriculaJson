import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatriculaService {

  private apiUrl = environment.apiUrl;
  constructor(public matriculaHttp: HttpClient) { }

  getMatricula() {
    return this.matriculaHttp.get(this.apiUrl+'/matriculas');
  }
  getMatriculaById(id: string) {
    return this.matriculaHttp.get(this.apiUrl+'/matriculas/' + id);
  }
  createMatricula(matricula: any) {
    return this.matriculaHttp.post(this.apiUrl+'/matriculas', matricula);
  }
  updateMatricula(id: string, matricula: any) {
    return this.matriculaHttp.put(this.apiUrl+'/matriculas/' + matricula.id, matricula);
  }
  deleteMatricula(id: string) {
    return this.matriculaHttp.delete(this.apiUrl+'/matriculas/' + id);
  }
}
