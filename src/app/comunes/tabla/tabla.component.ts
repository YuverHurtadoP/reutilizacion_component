import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  @Input() columns: string[] = [];
  @Input() data: any[] = [];
  @Output() delete = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();

  onDelete(row: any) {
    this.delete.emit(row);
  }

  onUpdate(row: any) {
    this.update.emit(row);
  }

}
