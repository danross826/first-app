import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input
} from '@angular/core';

@Component({
  selector: 'fa-lifecycle',
  template: `
    <ng-content></ng-content>
    <hr>
    <p #boundParagraph>{{bindable}}</p>
    <p>{{boundParagraph.textContent}}</p>
  `,
  styles: []
})
export class LifecycleComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {

  @Input() bindable = 1000;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }
  ngDoCheck(){
    this.log('ngDoCheck');
  }
  ngAfterContentInit(){
    this.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    this.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(){
    this.log('ngAfterViewChecked');
  }
  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }
  ngAfterDestroy(){
    this.log('ngAfterDestroy');
  }
  private log(hook:string){
    console.log(hook);
  }

}
