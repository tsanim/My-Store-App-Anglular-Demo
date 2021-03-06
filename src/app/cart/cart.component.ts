import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  totalPrice;
  checkoutForm;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  onSubmit(customerData) {
    console.log('Your order has been submitted', customerData);
    
    this.items = this.cartService.clearItems();
    this.totalPrice = 0;
    this.checkoutForm.reset();
  }
}
