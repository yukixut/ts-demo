class A {
  prop1 = 1;
  prop2 = " 11";
  method1() {
    console.log(this.prop1);
  }
  //     publice methode2(){
  //     console.log(this.props2);
  //    };
  method2() {
    this.method1();
  }
}
const a = new A();
a.method2();
