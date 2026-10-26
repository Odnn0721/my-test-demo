import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  constructor(private nav:NavController) { }
  ngOnInit() {
  }
  //C01-按钮、单选、复选
  showPage1(){
  }
  //C02-下拉框 select
  showPage2(){
  }
  //C03-alert 与 toast
  showPage3(){
  }
  //C04-图标
  showPage4(){
  }
}
