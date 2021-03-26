module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    execute(data) {
        const list = []
        data?.commands?.forEach( item => list.push(item.name))
        data?.app?.bot?.sendMessage(`my commands are:\n ${list.join(' | ')}`).then(() => console.log('done'))

    }
};
