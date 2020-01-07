import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import {TodolistComponent} from 'src/app/components/todolist/todolist.component';
import {FormsModule} from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

import {SearchComponent} from 'src/app/components/search/search.component';
///引入并配置服务
import {StorageService} from 'src/app/services/storage.service';
registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TodolistComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN },StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
