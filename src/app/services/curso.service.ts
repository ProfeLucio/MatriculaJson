import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private apiUrl = environment.apiUrl;
  constructor(public cursoHttp: HttpClient) { }

  getCurso() {
    return this.cursoHttp.get(this.apiUrl+'/cursos');
  }
  getCursoById(id: string) {
    return this.cursoHttp.get(this.apiUrl+'/cursos/' + id);
  }
  createCurso(curso: any) {
    return this.cursoHttp.post(this.apiUrl+'/cursos', curso);
  }
  updateCurso(id: string, curso: any) {
    return this.cursoHttp.put(this.apiUrl+'/cursos/' + curso.id, curso);
  }
  deleteCurso(id: string) {
    return this.cursoHttp.delete(this.apiUrl+'/cursos/' + id);
  }
}
