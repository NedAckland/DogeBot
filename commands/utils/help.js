const { prefix } = require('../../config.json');
const getByValue = require('../../common/getCommandAliases.js');

module.exports = {
    name: 'help',
    description: 'List all of my commands or info about a specific command.',
    aliases: ['commands'],
    execute(data, args) {
        const response = []
        if(!args.length) {
            response.push('Here\'s a list of all my commands:');
            data?.commands?.forEach( item => response.push(item.name))
            response.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);
            return data.message.reply([response.join('   -   ')],  {whispered: true})
                .then(() => {
                    console.log('sent command info')
                }).catch(e => {
                    console.log(e)
                })
        }
        const name = args[0].toLowerCase();
        const command = data.commands.get(name) || data.commands.get(getByValue(data.commands, name))
        if (!command) {
            return data.message.reply('that\'s not a valid command!');
        }

        response.push(`Name: ${command.name}`)
        if (command.aliases) response.push(`Aliases: ${command.aliases.join(', ')}`);
        if (command.description) response.push(`Description: ${command.description}`);
        if (command.usage) response.push(`Usage: ${prefix}${command.name} ${command.usage}`);
        if (command.rules) response.push(`Rules: ${command.rules.join(', ')}`);

        return data.message.reply([response.join('   -   ')],  {whispered: true})
    }
};
