import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-child',
  templateUrl: './counter-child.component.html',
  styleUrls: ['./counter-child.component.css']
})
export class CounterChildComponent implements OnInit {
  message:string;
  count= 0;
  constructor() { }

  ngOnInit(): void {
  }

  increaseByOne(){
    this.count = this.count + 1;
    this.message = 'Count value is' + ' ' + this.count;
  }

  deacreaseByOne(){
    this.count = this.count - 1;
    this.message = 'Count value is ' + ' ' + this.count;
  }
}
