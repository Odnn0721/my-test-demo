import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
    styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  constructor(private nav:NavController) { }
  ngOnInit() {
  }
  //B01-插值表达式
  showPage1(){
    this.nav.navigateForward('/tabs/tab2/b01');
  }

  //B02-单向绑定
  showPage2(){
    this.nav.navigateForward('/tabs/tab2/b02');
  }
  //B03-双向绑定
  showPage3(){
    this.nav.navigateForward('/tabs/tab2/b03');
  }
  //B04-内置指令
  showPage4(){
    this.nav.navigateForward('/tabs/tab2/b04');
  }
}

