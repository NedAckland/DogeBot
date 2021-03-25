
module.exports = {
    name: 'ping',
    description: 'Ping!',
    aliases: ['p'],
    execute(client) {
        client?.app?.bot?.sendMessage('pong').then(() => console.log('done'))
    },
};