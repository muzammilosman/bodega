import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.css']
})
export class PlaceOrderComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.fb.group({
      customerName: '',
      items: this.fb.array([this.createItem()])
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    console.log(this.items.value);
    this.items.push(this.createItem());
  }

  createItem(): FormGroup {
    return this.fb.group({
      productName: '',
      brand: '',
      quantity: ''
    });
  }

  submitOrder() {
    console.log(this.orderForm.value);
    alert('Order Created');
  }

}
