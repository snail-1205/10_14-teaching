/**
 * 이번에는 인터페이스를 배워볼거임
 * js에서 인터페이스는 두가지 기능을 하는데
 * 하나는 클래스를 어떻게 만들지 정의하는 거고
 * 두번째는 타입으로써의 기능이야
 * 타입으로써의 기능은 이미 타입이 하고있기 때문에 첫번째만 주의해서 보면 될거같아
 */

//인터페이스는 클래스랑 똑같이 만들어

interface creature {
  //클래스의 멤버가 뭐뭐있을지 적어주는거라고 보면 됨
  //인터페이스 자체는 아무것도 못하고 나중에 클래스를 꾸며주는 기능만 있음
  //꾸며진 클래스는 얘네들을 반드시 구현해야함
  name: string;
  age: number;
  //메소드들도 당연히 정의해줄수 있어
  //인터페이스는 구현하지 않고 어떤 함수가 있을 것이다! 라고만 하는거기 때문에
  //중괄호를 적어서 그 안에 구현 내용을 적지 않아.
  //하지만 인자로 뭘 받는지, 뭘 반환하는지를 써줄수 있지
  eat(food: string): void;
}

//이제 이 인터페이스를 구현한 클래스를 만들어 보자!
//여기서 저 위에 적어놓은 것들을 구현하지 않으면 오류가 떠
//vscode의 기능으로 한방에 만드는 것이 가능하니 한번 해보는 것을 추천해
class Person implements creature {
  name: string;
  age: number;
  eat(food: string): void {
    console.log(food + "를 먹었습니다!");
  }

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

//이제 만들어진 사람을 마음껏 쓸수 있는거지
const ingan = new Person("인간", 40);
ingan.eat("햄버거");

//그러나 인터페이스의 진가는 이렇게 class가 뭘 구현할지 적어줄 수 있을 뿐 아니라
//type으로 기능한다는 것도 있어

//이런식으로 creature를 받게 하면 person class의 인스턴스들이 올 수도 있지만
//creature를 implements 받은 다른 class의 인스턴스들도 올 수 있게 되는거지
function letEat(food: string, person: creature) {
  person.eat(food);
}

letEat("스파게티", ingan)
//letEat("스파게티", Person, Animal, Bird등 인터페이스를 구현한 모든 것들이 올수있어!)

