
const mySecret = process.env['token']

const discord = require('discord.js')

const client = new discord.Client()

client.login(mySecret).then(() => {
    console.log(`online`)
    client.user.setActivity("your_activity_here")
})
