module.exports = {
    name: 'hi',
    description: 'A little about me',
    aliases: ['introduce', 'intro'],
    execute(data) {
        data?.app?.bot?.sendMessage('dun-un-nu-nu bot mannnnn').then(() => console.log())
    }
};
