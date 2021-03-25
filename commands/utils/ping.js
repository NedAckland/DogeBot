
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(msg, app) {
        app.bot.sendMessage('pong').then(r => console.log('done'))
    },
};