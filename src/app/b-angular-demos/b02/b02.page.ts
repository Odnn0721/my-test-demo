import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-b02',
  templateUrl: './b02.page.html',
  styleUrls: ['./b02.page.scss'],
})
export class B02Page implements OnInit {
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  div1!: HTMLDivElement;
  readonly imgs: string[] = [
    '/assets/icon/favicon.png',
    '/assets/imgs/Mario.png'
  ];

  imgSrc!: string;
  id1!: number;
  id2!: number;
  colspanProperty: number = 2;
  readonly cssClass: string[] = ['p1','p2'];
  classProp!: string | undefined;

  ionViewDidLoad(){
    this.div1 = <HTMLDivElement>document.getElementById('div1');
    this.imgSrc=this.imgs[0];
    this.classProp=this.cssClass[0];
  }

  start(){
    this.id1=window.setInterval(()=>{
      if(this.imgSrc===this.imgs[0]){
        this.imgSrc=this.imgs[1];
      }else{
        this.imgSrc=this.imgs[0];
      }
    },1000);

    this.id2=window.setInterval(()=>{
      if (this.classProp===this.cssClass[0]){
        this.classProp= this.cssClass[1];
      }else{
        this.classProp= this.cssClass[0];
      }
    },2000);
  }

  stop(){
    if(this.id1===undefined) return;
    clearInterval(this.id1);
    clearInterval(this.id2);
  }

  switchDiv(){
    this.div1.hidden=!this.div1.hidden;
  }
}
