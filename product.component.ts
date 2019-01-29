############################### product.component.ts #################################

import {Component} from '@angular/core';

@Component({
    selector:'my-product',
    template:`<h1>Welcome to Angular</h1>
              <p>{{msg}}</p>`,
    styles:['h1{background-color:red;color:white;text-align:center}','p{background-color:lightgreen;color:white;padding:10px;text-align:center;margin:5px}']
     
})
  
export class ProductComponent{
     msg="Product Details";
}


                                            #####app.module.ts#######
                                            
                                            import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import {Product1Component} from './product/product1.component';
import { DemoComponent } from './product/democomponent';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    Product1Component,
    DemoComponent,
    EmployeeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }


##################### GO to Index.html and add your Component################

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ShoppingApp</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <my-product></my-product>
</body>
</html>

#################Run the Application#####################################
>ng serve --open

