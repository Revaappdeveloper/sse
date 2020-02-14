import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-operative';

  objs = [
    {
      circle: { label: '1', bgColor: 'violet' },
      button: [
        { label: '1', bgColor: 'red' },
        { label: '2', bgColor: 'blue' },
        { label: '3', bgColor: 'green' },
        { label: '4', bgColor: 'yellow' }
      ],
      visible: true
    },
    {
      circle: { label: '2', bgColor: 'violet' },
      button: [
        { label: '1', bgColor: 'red' },
        { label: '2', bgColor: 'blue' },
        { label: '3', bgColor: 'green' },
        { label: '4', bgColor: 'yellow' }
      ],
      visible: true

    },
    {
      circle: { label: '3', bgColor: 'violet' },
      button: [
        { label: '1', bgColor: 'red' },
        { label: '2', bgColor: 'blue' },
        { label: '3', bgColor: 'green' },
        { label: '4', bgColor: 'yellow' }
      ],
      visible: true

    },
    {
      circle: { label: '4', bgColor: 'violet' },
      button: [
        { label: '1', bgColor: 'red' },
        { label: '2', bgColor: 'blue' },
        { label: '3', bgColor: 'green' },
        { label: '4', bgColor: 'yellow' }
      ],
      visible: true

    }

  ];

  emitter(event) {
    console.log(event);
    this.objs.map((elm) => {
      if (elm.circle.label == event.index+1) {
        elm.visible = !elm.visible;
      }
    })
  }

}
