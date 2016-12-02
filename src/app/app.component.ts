import { Component } from '@angular/core';

import { DatabindingComponent } from './databinding';

import { LifecycleComponent } from './lifecycle.component';

@Component({
  selector: 'app-root',
  template: '<h1>Inline Template</h1>' +
  '<fa-databinding></fa-databinding>'+
  '<fa-lifecycle *ngIf="!delete" [bindable]="boundValue">' +
  '<p>{{test}}</p>' +
  '</fa-lifecycle>'+
  '<button (click)="true">Click to delete</button>'+
  '<button (click)="test = \'Changed value\'">Click to change Content</button>'+
  '<button (click)="boundValue = \'2000\'">Click to change Binding</button>',
  styles: ['h1{color: red;}']
})
export class AppComponent {
  title = 'app works!';

  test = 'Starting Value';
  boundValue = 1000;
}
