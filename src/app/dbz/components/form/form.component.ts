import { Component, EventEmitter, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter()


  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void {

    if (this.character.name.length === 0) return

    this.onNewCharacter.emit(this.character)

    this.character = {name: '', power: 0}
  }

}
