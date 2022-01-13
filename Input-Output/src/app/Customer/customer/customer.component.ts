import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerDetails: any;
  constructor() { }

  ngOnInit() {
    // called service/store

    this.customerDetails = {
      name: 'James Doe',
      address: {
        city: 'Phoenix'
      }
    };
  }

  


changed(customer: any) {
  if(customer.name === 'Tina Doe'){
    this.customerDetails = {
      name: 'James Doe',
      address: {
        city: 'Phoenix'
      }
    };
  } else {
    this.customerDetails = {
      name: 'Pankaj',
      address: {
        city: 'Phoenix'
      }
    };
  }
 
}
}
