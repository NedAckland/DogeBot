module.exports = {
    name: 'flip',
    description: 'do a thing',
    aliases: ['coin'],
    execute(client) {
        const coin = ['heads', 'tails']
        client?.app?.bot?.sendMessage(`${coin[Math.floor(Math.random()*coin.length)]}`).then(() => console.log(''))
    }
};
