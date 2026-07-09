import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LegalComponent } from './pages/legal/legal.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ShopComponent } from './pages/shop/shop.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Velluto Impex | Premium Hospitality Linen' },
  { path: 'about', component: AboutComponent, title: 'About Velluto Impex' },
  { path: 'shop', component: ShopComponent, title: 'Product Catalogue | Velluto Impex' },
  { path: 'products/:slug', component: ProductDetailsComponent, title: 'Product Details | Velluto Impex' },
  { path: 'categories', component: CategoriesComponent, title: 'Categories | Velluto Impex' },
  { path: 'contact', component: ContactComponent, title: 'Contact Velluto Impex' },
  { path: 'privacy-policy', component: LegalComponent, title: 'Privacy Policy | Velluto Impex', data: { type: 'privacy' } },
  { path: 'terms-conditions', component: LegalComponent, title: 'Terms & Conditions | Velluto Impex', data: { type: 'terms' } },
  { path: '**', redirectTo: '' }
];
