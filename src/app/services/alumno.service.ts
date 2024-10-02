import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private apiUrl = environment.apiUrl;
  constructor(public alumnoHttp: HttpClient) { }

  getAlumno() {
    return this.alumnoHttp.get(this.apiUrl+'/alumnos');
  }
  getAlumnoById(id: string) {
    return this.alumnoHttp.get(this.apiUrl+'/alumnos/' + id);
  }
  createAlumno(alumno: any) {
    return this.alumnoHttp.post(this.apiUrl+'/alumnos', alumno);
  }
  updateAlumno(id: string, alumno: any) {
    return this.alumnoHttp.put(this.apiUrl+'/alumnos/' + alumno.id, alumno);
  }
  deleteAlumno(id: string) {
    return this.alumnoHttp.delete(this.apiUrl+'/alumnos/' + id);
  }
}
