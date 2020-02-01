import { Component, OnInit,ViewChild } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-p-component',
  templateUrl: './p-component.component.html',
  styleUrls: ['./p-component.component.css']
})
export class PComponentComponent implements OnInit {
  @ViewChild('childA',null)  childA:any;
  public title:string="我是父组件的title";
  constructor() { }

  ngOnInit() {
  }
  run(){
    alert("我是父组件中的方法!");
  }
  work(){
    console.log("父组件中的其他方法!");
  }
  getChildTitle(){
    alert(this.childA.childTitle);
  }
  getChildRun(){
    this.childA.childRun();
  }
}
