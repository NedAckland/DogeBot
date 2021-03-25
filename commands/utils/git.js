
module.exports = {
    name: 'git',
    description: 'github link',
    execute(client) {
        client?.app?.bot?.sendMessage(` here is the github: https://github.com/NedAckland/DogeBot`).then(() => console.log('done'))
    },
};