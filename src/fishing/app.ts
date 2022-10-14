/**
 * ㅎㅇ 오늘부터 재밌는 봇을 만들어 볼거임
 * 하나는 낚시하는 봇이고 하나는 도박하는 봇임
 * 이거로 너가 흥미를 느꼈으면 좋겠다
 *
 * 바로 시작할게!!
 *
 * telegraf에서 Telegraf라는 걸 구조분해로 가져옴.
 * import Telegraf from "telegraf"라고 하면 무슨 문제가 있을지 생각해보셈
 */

import { Telegraf } from "telegraf";

//app에 Telegraf의 인스턴스를 만들음
//class도 결국에는 함수라고 생각하면 좋음.
//대신 함수는 중괄호 안이 실행되지만 class는 constructor 안이 실행됨(또한 new도 써줘야하지)
const app = new Telegraf("5728320181:AAEeWOZ-ItUBgi5tuOcJpFQZOQVoHfaVqE4");
//이제 만든 이 앱을 가지고(앱은 걍 이름지은거)여러 행동을 할 수 있음.
//!test라고 하면 test라고 말해주는걸 만들거임.
//봇을 시작하는 메소드
app.launch();

app.help((ctx) => {
  ctx.reply("SDf");
});
app.command("test", (ctx) => {
  //command라는 메소드는 두번째 인자로 콜백함수를 받음
  //이 콜백함수는 하나의 인자를 받음
  //나는 그 인자의 이름을 ctx라고 지었음. 아무거나 해도 되지만 context라는 것을 강조하기 위함임
  //왜 ctx라고 막 지은 인자가 Context가 되느냐? 설명해드림
  //일단 이 콜백함수 자체는 화살표함수임. 즉 "익명함수"라 그 자체로는 ctx에 아무 의미를 부여 못함
  //그러나 command의 두번째 인자로 들어가게 됨으로써, 이 "익명함수"는 역할을 가지게 됨
  //그 역할은 바로 Context를 인자로 받아 처리하는 역할임

  //ctx안에 있는 reply 메소드를 실행시켜 대답을 하게 되는거임
  ctx.reply("test!");
});

//너무 어렵게 생각하지 말고 test라는 말을 받으면 두번째 함수가 실행되구나! 라고 생각해도 됨

//이제 낚시를 만들거임
//일단 물고기들을 만들자

let fish = ["대구", "연어", "멸치", "참치", "고등어"];

//그리고 인벤토리를 만들거임

let inventory = [];

//이제 낚시라고 하면 하나를 낚는걸 만들자!

app.command("fish", (ctx) => {
  //이런식으로 하면 대구밖에 안잡히겠지
  // ctx.reply(fish[0]+"을(를) 잡았습니다!")

  //그렇기 떄문에 랜덤으로 배열에서 뽑아와야 하는데
  //이걸 ㅈㄴ 쉽게 해주는 lodash라는 라이브러리가 있음
  //그런데 쉬운 길은 일단 놔두고 정석부터 볼거임
  //Math라는 console같은 원래있는걸 쓸거임
  const getFish = fish[Math.floor(Math.random() * fish.length)];
  ctx.reply(getFish + "을(를) 잡았습니다!").catch(console.log);

  //이제 인벤토리에 물고기를 저장해야지
    inventory.push(getFish)
});

app.command("info",(ctx)=>{
    //현재 물고기가 얼마나 있는지 보여주는 커맨드
    //배열.join(text)를 하게되면 배열의 요소들 사이에 text를 넣은다음 모아서 문자열을 반환해줌
    ctx.reply("현재 보유하신 물고기는 \n"+fish.join("\n"))
})
