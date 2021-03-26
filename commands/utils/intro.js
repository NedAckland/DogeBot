module.exports = {
    name: 'hi',
    description: 'A little about me',
    aliases: ['introduce', 'intro'],
    execute(client) {
        client?.app?.bot?.sendMessage('dun-un-nu-nu bot mannnnn').then(() => console.log())
    }
};
