import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd/message';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public keyword:string;
  public todolist:any[]=[];
  constructor(private msg:NzMessageService) { }

  ngOnInit() {
  }
  doAdd(event:any){
    debugger;
    if(event.keyCode==13){
      if(!this.todolistHasKeyword(this.todolist,this.keyword)){
        this.todolist.push({
          title:this.keyword,
          status:0
        });
      }
      else{
        // alert(`${this.keyword} have exist`);
        this.msg.warning(`${this.keyword} have exist`)
      }  
    }

  }
  deleteData(key:any){
    this.todolist.splice(key,1);
  }
  todolistHasKeyword(todolist:any,keyword:string):boolean{
    //#region 异步可能会出错
    // this.todolist.forEach(item=>{
    //   if(item.title==keyword){
    //     return true;
    //   }
    // });
    // return false;
    //#endregion
    for(let i:number=0;i<todolist.length;i++){
      if(todolist[i].title==keyword){
        return true;
      }
    }
    return false;
  }
}
