import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  standalone: false,
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private nav:NavController) { }
  ngOnInit() {
  }
  //D01-基本地图与控件
  showPage1(){
  }
  //D02-覆盖物
  showPage2(){
  }
  //D03-信息窗口
  showPage3(){
  }
  //D04-标注
  showPage4(){
  }
  //D05-地址解析
  showPage5(){
  }
  //D06-定位
  showPage6(){
  }
  //D07-公交查询与位置检索
  showPage7(){
  }
  //D08-路线规划与距离计算
  showPage8(){
  }
  //D09-GPS导航
  showPage9(){
  }
}
