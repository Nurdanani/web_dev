import { NgModel } from "@angular/forms";
import { Routes} from "@angular/router";
import { ProductListComponent } from "./components/products/product-list.component";
import { ProductItemComponent } from "./components/products/product-item.component";
import { ProductDetailComponent } from "./components/products/product-detail.component";
import { RouterModule} from "@angular/router";

const routes: Routes = [
    { path: '', component: ProductListComponent }, 
    { path: 'product/:id', component: ProductDetailComponent } 
  ];

