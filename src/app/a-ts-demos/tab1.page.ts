
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(private nav:NavController) {}
  ngOnInit() {
  }
  //A01-helloword
  showPage1(){
    this.nav.navigateForward('/tabs/tab1/a01');
  }

  //A02-数据类型、数组、元组
  showPage2(){
    this.nav.navigateForward('/tabs/tab1/a02');
  }

  showPage3() {
    this.nav.navigateForward('/tabs/tab1/a03');
  }

  //A04-function 与箭头函数
  showPage4(){
    this.nav.navigateForward('/tabs/tab1/a04');
  }

}
