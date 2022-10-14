import { Telegraf } from "telegraf";
const app = new Telegraf("5728320181:AAEeWOZ-ItUBgi5tuOcJpFQZOQVoHfaVqE4");
app.launch();

//이번에는 도박 봇을 만들어볼거임

//일단 이용자의 돈주머니를 만들자

let cash = 0

//이제 도박을 하면 돈을 랜덤하게 벌게하자!

app.command("gamble", (ctx)=>{
    const money = Math.floor(Math.random()*10)
    ctx.reply(money + "원을 벌었습니다!")
    cash += money
})

app.command("info",(ctx=>{
    ctx.reply("현재 보유하신 돈은" + cash + "원 입니다!")
}))