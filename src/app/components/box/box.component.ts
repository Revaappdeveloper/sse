import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  @Input('obj') obj = {
    circle: { label: '1', bgColor: 'violet' },
    button: [
      { label: '1', bgColor: 'red' },
      { label: '2', bgColor: 'blue' },
      { label: '3', bgColor: 'green' },
      { label: '4', bgColor: 'yellow' }
    ]
  };

  @Output('emitter') emitter: EventEmitter<any> = new EventEmitter();


  isButtonVisible = true;
  inboundClick = true;

  constructor() { }

  ngOnInit() {
  }

  showHide(index) {
    this.emitter.emit({ eventName: 'showHide', index: index });

  }

}
