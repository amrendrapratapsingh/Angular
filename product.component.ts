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