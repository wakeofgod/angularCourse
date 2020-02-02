import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  @Input() title:string;
  constructor() { 
    console.log("00构造函数执行了,除了使用简单的值对局部变量进行初始化外，应该什么都不做");
  }
  ngOnChanges(){
    console.log("01ngOnChanges执行了,--当被绑定的输入属性的值发生变化时调用(父子组件传值时会触发)");
  }
  ngOnInit() {
    console.log("02ngOnInit执行了,--请求数据一般放在这里");
  }
  ngDoCheck(){
    console.log("03ngDoCheck执行了---检测，并在发生 Angular 无法或不愿意自己检测的变化时作出反应");
  }
  ngAfterContentInit(){
    console.log("04ngAfterContentInit执行了---当把内容投影进组件之后调用");
  }
  ngAfterContentChecked(){
    console.log("05ngAfterContentChecked执行了---每次完成被投影组件内容的变更检测之后调用");
  }
  ngAfterViewInit(){
    console.log("06 ngAfterViewInit执行了----初始化完组件视图及其子视图之后调用（dom操作放在这个里面）");
  }
  ngAfterViewChecked(){
    console.log("07ngAfterViewChecked执行了----每次做完组件视图和子视图的变更检测之后调用");
  }
  ngOnDestroy(){
    console.log("08ngOnDestroy执行了····'");
  }
}
