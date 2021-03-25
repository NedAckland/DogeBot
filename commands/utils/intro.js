module.exports = {
    name: 'intro',
    description: 'A little about me',
    aliases: ['introduce', 'i'],
    execute(client) {
        client?.app?.bot?.sendMessage('dun-un-nu-nu bot mannnnn').then(r => console.log('done'))
    }
};
