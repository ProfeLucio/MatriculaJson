import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-curso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-curso.component.html',
  styleUrl: './form-curso.component.sass'
})
export class FormCursoComponent {
  public curso: string = '';
  @Output() evento: EventEmitter<any> = new EventEmitter<any>();
  onSave(){
    this.evento.emit(this.curso);
    this.curso = '';
  }
}
