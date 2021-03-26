module.exports = {
    name: 'flip',
    description: 'do a thing',
    aliases: ['coin'],
    execute(data) {
        const coin = ['heads', 'tails']
        data?.app?.bot?.sendMessage(`${coin[Math.floor(Math.random()*coin.length)]}`).then(() => console.log(''))
    }
};
