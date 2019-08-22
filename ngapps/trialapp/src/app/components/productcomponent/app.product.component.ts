// import { Component,OnInit } from "@angular/core";
// import {Product,Categories,Manufacturers} from "./../../models/app.product.model";
// import {ProductLogic} from './../../models/app.product.logic';
// @Component({
//     selector:'app-product-component',
//     templateUrl:'./app.product.component.view.html'
// })
// export class ProductComponent implements OnInit{
//     product: Product;
//     products:Array<Product>;
//     headers:Array<string>;
//     //local public member for storing constant arrays
//     categories=Categories;
//     manufacturer=Manufacturers;
//     //private member of logic class
//     private logic:ProductLogic;

//     constructor(){
//         this.product=new Product(0,"","","",0);
//         this.products=new Array<Product>();
//         this.logic=new ProductLogic();
//         this.headers=new Array<string>();
//     }

//     ngOnInit():void{
//         for(let p in this.product){
//             this.headers.push(p);
//         }
//         this.products=this.logic.getProducts();
//     }
//     clear():void{
//         this.product=new Product(0,"","","",0);
//     }
//     save():void{
//         this.products=this.logic.saveProduct(this.product);
//     }

//     getSelected(prd:Product):void{
//         //new location will be created with values from 'prd'
//         // and product will point to new location
//         this.product=Object.assign({},prd);
//     }

//     deleteSelected(i:number):void{
//         //console.log(i);
//         this.products.splice(i,1);
//     }
// }