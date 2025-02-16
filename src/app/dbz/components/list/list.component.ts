import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  emitOnDelete(id?: string): void {

    if (!id) return

    this.onDeleted.emit(id)
  }

}
