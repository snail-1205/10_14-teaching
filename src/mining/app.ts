import { Telegraf } from "telegraf";
const app = new Telegraf("5728320181:AAEeWOZ-ItUBgi5tuOcJpFQZOQVoHfaVqE4");
app.launch();

//이번에는 채굴 봇을 만들어볼거임

//낚시 봇이랑 비슷한데 이번엔 광물 하나하나에 돈도 넣을거임
//일단 지갑을 만들자

let cash = 0;

//이제 광물들 종류를 만들건데 배열 안에 객체가 있는 형태로 만들거임
//그래야지 이름이랑 가격을 동시에 매길 수 있음

let mineral = [
  { name: "석탄", price: 50 },
  { name: "철", price: 200 },
  { name: "금", price: 1000 },
  { name: "다이아", price: 10000 },
];

//이제 채굴을 할 수 있게 하자

app.command("mine", (ctx) => {
  const getMineral = mineral[Math.floor(Math.random() * mineral.length)];
  ctx.reply(
    getMineral.name + "을(를) 캤습니다!\n" + "벌은 돈 : " + getMineral.price
  );
  cash += getMineral.price;
});

app.command("info", (ctx) => {
  ctx.reply("현재 보유하신 돈은" + cash + "원 입니다!");
});

//이제 심화해서 게임들을 만들어나가면 됨