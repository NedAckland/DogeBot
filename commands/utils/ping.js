module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['p'],
    execute(data) {
        data.message.reply(['pong'], {whispered: true, mentionUser: true})
        // client?.app?.(`@TheRealHudson`).then(() => console.log('done'))
    },
};