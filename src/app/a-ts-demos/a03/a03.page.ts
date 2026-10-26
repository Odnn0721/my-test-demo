import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface MyOptions {
  a: number;
  b: 'ease-in' | 'ease-out' | 'ease-in-out';
}

interface MyOptions2 {
  p1: string;
  p2: string[] | (() => string);
}

class MyClass {
  constructor(public opts: MyOptions) {}
}

class Person {
  constructor(public name: string) {}
}

class ConsoleLogger {
  log() {
    console.log('hello!');
  }
}

function MyExt<T, U>(first: T, second: U): T & U {
  let result = {} as T & U;
  for (let id in first) {
    (result as any)[id] = (first as any)[id];
  }
  for (let id in second) {
    if (!(result as any).hasOwnProperty(id)) {
      (result as any)[id] = (second as any)[id];
    }
  }
  return result;
}

@Component({
   standalone: false,
  selector: 'app-a03',
  templateUrl: './a03.page.html',
  styleUrls: ['./a03.page.scss'],
})
export class A03Page implements OnInit {
  myDiv!: HTMLDivElement;
  constructor(public navCtrl: NavController) { }

  ngOnInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this.myDiv = document.getElementById('mydiv') as HTMLDivElement;
    this.myDiv.innerText = '此处显示单击按钮后输出的结果';
  }

  // 1、字符串字面量类型
  click1() {
    let options: MyOptions = {
      a: 3,
      b: 'ease-in'
    };
    let c = new MyClass(options);
    this.myDiv.innerHTML = '1、字符串字面量类型<hr/>' +
      `<p>
         a 的 options 属性的值为:<br/>
         x=${c.opts.a}, b=${c.opts.b}
       </p>`;
  }

  // 2、联合
  click2() {
    this.myDiv.innerHTML = '2、联合<hr/>';
    let opts: MyOptions2 = {
      p1: 'hello world',
      p2: ['a1', 'a2'],
    };
    this.myDiv.innerHTML += `<p>
      opts 的值为:<br/>
      p1: ${opts.p1}<br/>
      p2: ${(opts.p2 as string[])[0]}, ${(opts.p2 as string[])[1]}
    </p>`;
  }

  //3、交叉
  click3() {
    this.myDiv.innerHTML = '3、交叉<hr/>';
    let jim = MyExt(new Person('杰姆'), new ConsoleLogger());
    this.myDiv.innerHTML += `<p>
      jim 的 name 属性值为:${jim.name} <br/>
    </p>`;
  }
}
