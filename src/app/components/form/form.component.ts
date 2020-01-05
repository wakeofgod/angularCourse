import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doSubmit():void{
    //jqeury dom操作
    let usernameDom:any=document.getElementById("username");
    console.log(usernameDom.value)
  }
}
