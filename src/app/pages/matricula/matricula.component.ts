import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../services/curso.service';
import { AlumnoService } from '../../services/alumno.service';
import { MatriculaService } from '../../services/matricula.service';
import { FormCursoComponent } from '../../shared/form-curso/form-curso.component';
import { FormMatriculaComponent } from '../../shared/form-matricula/form-matricula.component';

@Component({
  selector: 'app-matricula',
  standalone: true,
  imports: [FormCursoComponent, FormMatriculaComponent],
  templateUrl: './matricula.component.html',
  styleUrl: './matricula.component.sass'
})
export class MatriculaComponent implements OnInit {
  public cursos: any[] = [];
  public cursoSelected: any;


  public alumnos: any[] = [];
  public matriculas: any[] = [];
  constructor(
    private cursoServ: CursoService,
    private alumnoServ: AlumnoService,
    private matriculaServ: MatriculaService,
  ) { }

  ngOnInit(): void {
    this.getCurso();
  }

  getCurso() {
    this.cursoServ.getCurso().subscribe((res: any) => {
      this.cursos = res;
    });
  }
  getAlumno() {
    this.alumnoServ.getAlumno().subscribe((res: any) => {
      this.alumnos = res;
    });
  }
  getMatricula() {
    this.matriculaServ.getMatricula().subscribe((res: any) => {
      this.matriculas = res;
    });
  }

  onSaveCurso(data: string) {
    let obj = { nombre: data }
    this.cursoServ.createCurso(obj).subscribe((res: any) => {
      this.cursos.push(res);
    });
  }

  onSelectCurso(curso: any) {
    this.cursoSelected = curso;
  }

  onSaveAlumno(data: any) {
    this.alumnoServ.createAlumno(data).subscribe((res: any) => {
      this.alumnos.push(res);
      console.log(res.id);
      console.log(this.cursoSelected.id);
      let data2 = { alumno_id: res.id, curso_id: this.cursoSelected.id }
      this.matriculaServ.createMatricula(data2).subscribe((res: any) => {});
    });
  }


}
