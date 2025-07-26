import { Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list';

const routes: Routes = [
  { path: '', component: ProductListComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};



