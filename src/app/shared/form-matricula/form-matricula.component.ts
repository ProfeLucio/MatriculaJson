import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-matricula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-matricula.component.html',
  styleUrl: './form-matricula.component.sass'
})
export class FormMatriculaComponent {
  @Input() curso: any;
  @Output() evento: EventEmitter<any> = new EventEmitter<any>();
  public alumno: {
    codigo: string,
    nombre: string,
  } = { codigo: '', nombre: '' };

  onSave(){
    this.evento.emit(this.alumno);
    this.curso = '';
  }
}
