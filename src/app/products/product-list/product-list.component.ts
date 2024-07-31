import { Component } from '@angular/core';
import { product } from '../../models/product.model';
import { productService } from '../../products/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../cart/cart.service';
import { CheckoutService } from '../../checkout/checkout.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productId!: number;
  selectedProduct!: product | undefined;
  productList:product[] = [];
  // constructor (private productService: productService, private cartService: CartService, private checkoutService: CheckoutService) {}

  // ngOnInit(): void {
  //   this.productList = this.productService.getProducts();

  // }
  // addToCart(product: product){
  //   console.log('Agregado' + product.name);
  //   this.cartService.addToCart(product);
  //   this.checkoutService.addToCart(product);
  //   window.alert('Agregado al carrito ' + product.name);
  // }
  // getProductById(){
  //   if(this.productId){
  //     this.selectedProduct = this.productService.getProductById(this.productId);
  //   }

  // }
  constructor(private productService: productService, private cartService: CartService, private checkoutService: CheckoutService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: product[]) => {
      this.productList = data;
    })
  }
  getProductById(){
    if(this.productId){
      this.productService.getProductById(this.productId).subscribe((product: product) => {
        this.selectedProduct = product;
      })
  }
}

  addToCart(product: product){
    this.productService.addToCart(product);
    console.log('Agregado' + product.title);
    this.checkoutService.addToCart(product);
    this.cartService.addToCart(product);
    window.alert('Agregado al carrito ' + product.title);
  }
}
