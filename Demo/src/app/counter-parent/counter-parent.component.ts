import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterChildComponent } from '../counter-child/counter-child.component';

@Component({
  selector: 'app-counter-parent',
  templateUrl: './counter-parent.component.html',
  styleUrls: ['./counter-parent.component.css']
})
export class CounterParentComponent implements OnInit {
@ViewChild(CounterChildComponent) counter: CounterChildComponent;
  constructor() { }

  ngOnInit(): void {
  }

  increase(){
    this.counter.increaseByOne();
  }

  decrease(){
   this.counter.deacreaseByOne();
  }

}
