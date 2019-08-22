import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SimpleComponent} from './components/simplecomponent/app.simple.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {CalculatorComponent} from './components/calculatorcomponent/app.calculator.component';
import {ProductChildComponent} from './components/communicationcomponents/app.product.component';
import {CategoryComponent} from './components/communicationcomponents/app.category.component';
import {HttpService} from './services/app.http.service';
import {CommunicationService} from './services/app.comunication.service';
import {ProductServiceComponent} from './services/productservice/app.product.component.service';
@NgModule({
  declarations: [
    CategoryComponent, ProductChildComponent,ProductServiceComponent
  ],
  imports: [
    BrowserModule, FormsModule,HttpModule
  ],
  providers: [HttpService],
  bootstrap: [CategoryComponent,ProductServiceComponent]
})
export class AppModule { }
