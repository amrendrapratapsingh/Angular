###################### demo.component.ts ##################################
Note:Always use Property binding if you want to Configure for any element dynamically.
#<input type="button" [disabled] = 'isdisabled' value="Submit"> // for Property binding
Note:Changing "isdisabled" value in class will not effect in InterPolation.
# <input type="button" disabled = '{{isdisabled}}' value="Submit"> // for InterPolation binding

import {Component} from '@angular/core';

@Component({
    selector:'app-demo',
    template:`
    <div>
    <input type="button" disabled = '{{isdisabled}}' value="Submit">
    </div>
    `
})
export class DemoComponent{
    isdisabled = false;

}

######################### app.module.ts ###################

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
  bootstrap: [DemoComponent]
})
export class AppModule { }

################## Go to index.html and define the Component #####################
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
  <app-demo></app-demo>
</body>
</html>


########################### Run the Application##############
>ng serve --open

############## Press F12 in Browser and define Component ###################
>txtName.getAttribute('value');
"John"
>txtName.value;
"John"

########## Change the textBox value "David" ####################
>txtName.getAttribute('value');
"John"
>txt.value();
"David"



