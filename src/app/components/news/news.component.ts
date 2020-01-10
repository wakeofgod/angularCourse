import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @ViewChild('mybox',null) myBox:any;
  //获取子组件
  @ViewChild('header',null) header:any;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    //console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.width='100px';


    this.myBox.nativeElement.style.height='100px';


    this.myBox.nativeElement.style.background='red';

    this.header.run();
  }
  getChildRun(){
    this.header.run();
  }
}
