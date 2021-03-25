module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    execute(client, app) {
        const data = []
        client?.forEach( item => data.push(item.name))

        app?.bot?.sendMessage(`my commands are:\n ${data.join(' | ')}`).then(() => console.log('done'))

    }
};
