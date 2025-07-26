import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  // Model for new product form
  newProduct = {
    name: '',
    price: 0,
    quantity: 0,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.http.get<any[]>('http://localhost:3000/products').subscribe(data => {
      this.products = data;
    });
  }

  addProduct() {
    if (!this.newProduct.name) {
      alert('Please enter a product name');
      return;
    }
    this.http.post('http://localhost:3000/products', this.newProduct).subscribe(() => {
      this.newProduct = { name: '', price: 0, quantity: 0 };
      this.loadProducts();
    });
  }
}






