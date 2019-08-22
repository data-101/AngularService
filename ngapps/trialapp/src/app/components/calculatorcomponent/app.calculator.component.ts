//1.import the component class
import {Component} from '@angular/core';
//2.apply the Component Decorator on the class and set its properties

@Component({
    selector:'app-calculator-component',
    templateUrl:'./app.calculator.component.view.html'
})
export class CalculatorComponent {
    exp:string;
    constructor(){
        this.exp="";
    }

    keyPress(x:string):void {
        this.exp+=x;
    }
   process():void{
       console.log(this.exp);
       this.exp=eval(this.exp);
   }
   clear():void{
       this.exp="";
   }
}