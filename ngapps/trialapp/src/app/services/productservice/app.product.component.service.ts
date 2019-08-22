import { Component,OnInit } from "@angular/core";
import {Product} from "./../../models/app.product.model";
import {HttpService} from './../app.http.service';
import { Services } from "@angular/core/src/view";
import {Response} from '@angular/http';
@Component({
    selector:'app-product-component',
    templateUrl:'./app.product.component.view.html'
})
export class ProductServiceComponent implements OnInit{
    product: Product;
    products:Array<Product>;
    headers:Array<string>;
    //local public member for storing constant arrays
    // categories=Categories;
    // manufacturer=Manufacturers;
    //private member of logic class

    constructor(private serv:HttpService){
        this.product=new Product(0,"","","",0);
        this.products=new Array<Product>();
        this.headers=new Array<string>();
    }

    ngOnInit():void{
        for(let p in this.product){
            this.headers.push(p);
        }
        //subscribe to the HttpService and its getData() method
        this.serv.getData().subscribe((resp:Response)=>{
            this.product=resp.json();
        });
    }
    clear():void{
        this.product=new Product(0,"","","",0);
    }
    save():void{
        this.serv.processData(this.product).subscribe((resp:Response)=>{
            this.products=resp.json();
        });
    }

    getSelected(prd:Product):void{
        //new location will be created with values from 'prd'
        // and product will point to new location
        this.product=Object.assign({},prd);
    }

    deleteSelected(i:number):void{
        //console.log(i);
        this.products.splice(i,1);
    }
}