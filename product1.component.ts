####################################### product1.component.ts ##########################


import {Component} from '@angular/core';

@Component({
    selector:'app-product',
    templateUrl:'product.component.html',
    styleUrls:['product.component.css']
})
export class Product1Component{
     prod={
         Name:'Samsung Tv',
         Price:42000.53,
         Mfd:new Date('2019/01/11'),
         Photo:'assets/nike.jpg',
         Qty:2,
         IsInStock:false
     };
    }



################################### product.component.html ##################################
<h2>Product Details</h2>
<table align="center" border="1" width="400"  cellspacing="4" cellpadding="4">
    <tr>
        <td>
           
            <img src='{{prod.Photo}}' width="100" height="100"/>
        </td>
        <td>
            <table align="center"frame="box" rules="all" border="1">
                <tr>
                    <td>Name</td>
                    <td>{{prod.Name}}</td>
                </tr>
                <tr>
                    <td>Price</td>
                    <td>{{prod.Price}}</td>
                </tr>
                <tr>
                    <td>ManuFactured</td>
                    <td>{{prod.Mfd}}</td>
                </tr>
                <tr>
                    <td>Total Amount</td>
                    <td><span innerHTML='{{prod.Qty *prod.Price}}'></span></td>
                </tr>
                <tr>
                    <td>Is In Stock</td>
                    <td>{{prod.IsInStock ? 'Available': 'Out of Stock'}}</td>
                </tr>

            </table>
        </td>
    </tr>
</table>


######################################## product.component.css #####################################

table{
    border-style:groove;
    border-width:2px; 
    border-color:red
}

################## app.module.ts ##################################################

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductComponent } from './product.component';
import {Product1Component} from './product/product1.component';
import { DemoComponent } from './product/democomponent';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    //ProductComponent,
    Product1Component,
    DemoComponent,
    EmployeeComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }

############################# index.html #################################

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
  <app-product></app-product>
</body>
</html>

