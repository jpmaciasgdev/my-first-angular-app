import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CheckoutService } from '../checkout.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  items: any;
  constructor(private checkoutService: CheckoutService) {}

  ngOnInit(): void {
  this.items = this.checkoutService.getItems();
  }
}
