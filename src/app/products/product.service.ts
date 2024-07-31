import { Injectable } from '@angular/core';
import { product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class productService {
  // private productList:product[] = [
  //   {id: 1, name: 'Product 1', description: 'Product 1 description', price: 100, imageURL: 'https://picsum.photos/id/237/200/300'},
  //   {id: 2, name: 'Product 2', description: 'Product 2 description', price: 200, imageURL: 'https://picsum.photos/id/238/200/300'},

  // ]
  // getProducts():product[] {
  //   return this.productList;
  // }

  // getProductById(id: number): product | undefined {
  //   return this.productList.find(resultProduct => resultProduct.id == id);

  // }
  private apiUrl = 'https://fakestoreapi.com/products';
  constructor(private http: HttpClient) { }
    getProducts(): Observable<product[]> {
    return this.http.get<any[]>(this.apiUrl);

  }
  getProductById(id: number): Observable<product> {
    return this.http.get<product>(`${this.apiUrl}/${id}`);
  }
  addToCart(product: any) {
    this.http.post(this.apiUrl, product).subscribe();
  }
}
