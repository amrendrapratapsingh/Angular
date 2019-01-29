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
