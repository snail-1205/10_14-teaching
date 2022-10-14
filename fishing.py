import math
from random import random
from telegram import Update
from telegram.ext import Application, CommandHandler, ContextTypes

inventory = []
fish = ["연어", "대구", "참치", "멸치", "고등어"]

def main() -> None:
    """Run bot."""
    # Create the Application and pass it your bot's token.
    app = Application.builder().token(
        "5728320181:AAEeWOZ-ItUBgi5tuOcJpFQZOQVoHfaVqE4").build()
    app.add_handlers([CommandHandler("test", test),CommandHandler("fish", fishing),CommandHandler("info", info)])

    app.run_polling()


async def test(update : Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("test")
async def info(update : Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("\n".join(inventory))

async def fishing(update : Update, context: ContextTypes.DEFAULT_TYPE):
    getfish = fish[math.floor(random() * len(fish))]
    inventory.append(getfish)
    await update.message.reply_text(getfish + "를 잡았습니다!")


if __name__ == "__main__":
    main()
