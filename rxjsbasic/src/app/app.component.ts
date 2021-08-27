import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Button } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'rxjsbasic';
selected: boolean = false;
  form: FormGroup;
 constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
  }
  Row = [
    {
      id: 1, value:'button1 from Row1'
    },
    {
      id: 2, value:'button2 from Row1'
    },
    {
      id: 3, value:'button1 from Row2'
    },
    {
      id: 4, value:'button2 from Row2'
    },
    {
      id: 4, value:'button1 from Row3'
    },
    {
      id: 5, value:'button2 from Row3'
    }
  ]

  onSubmit(){

}
  button1(){
 if(this.Row[0].value && this.Row[0].value){
   this.selected = true;
 }
    console.log(this.Row[0].value);
  }
  button2(){
    console.log(this.Row[1].value);
  }
  button3(){
    console.log(this.Row[2].value);
  }
  button4(){
    console.log(this.Row[3].value);
  }
  button5(){
    console.log(this.Row[4].value);
  }
  button6(){
    console.log(this.Row[5].value);
  }
  
}
