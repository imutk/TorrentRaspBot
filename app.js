const Telegraf = require('telegraf')
const commandArgs = require('./arguments')

const bot = new Telegraf("AAHj8cosL9FY8ngcLkd6vrD7n3h9HYsXjC0")

bot.use(commandArgs)

bot.start((ctx) => ctx.reply('Pablo Tonto, tonto, tontisimo.'))
bot.help((ctx) => ctx.reply('Te voy a meter un guantazo que vamos a morir los dos. Tu del guantazo y yo de la onda expansiva'))

bot.launch()