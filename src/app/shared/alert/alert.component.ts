import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() message: string;
  // tslint:disable-next-line:no-output-native
  @Output() close = new EventEmitter<void>();

  constructor() {
  }

  closeModal(): void{
    this.close.emit();
  }
}
