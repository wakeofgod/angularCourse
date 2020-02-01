import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input() msg:string;
  @Input() run:any;
  @Input() parent:any;
  public childTitle:string="我是子组件中的title";
  constructor() { }

  ngOnInit() {
  }
  getParentRun(){
    this.run();
  }
  getParent(){
    console.log(this.parent.title);
    this.parent.work();
  }
  childRun(){
    alert("我是子组件中的方法");
  }
}
