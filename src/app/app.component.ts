import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'angularDemon04';
  public flag:boolean=true;
  public clickCount:number=1;
  changeTitle(){
    this.clickCount++;
    this.title="我是改变后的title"+this.clickCount;
  }
  changeFlag(){
    this.flag=!this.flag;
    console.log(this.flag);
  }
}
