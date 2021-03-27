require("dotenv").config();
const { Client } = require('dogehouse.js');
const fs = require("fs");
const { prefix } = require('./config.json');
const getByValue = require('./common/getCommandAliases.js');

const app = new Client();

const commandFolders = fs.readdirSync('./commands');

const commands = new Map;

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        commands.set(command.name, command);
    }
}


app.connect(process.env.DOGEHOUSE_TOKEN, process.env.DOGEHOUSE_REFRESH_TOKEN).then(async () => {
    console.log('Bot connected!');
    app.rooms.join("2293ef87-2d6b-42f2-bcf9-68ee71438b1b");
}).catch((e) => console.log(e))

app.on('newChatMessage', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = commands.get(commandName) || commands.get(getByValue(commands, commandName))
    const data = {commands: commands, app: app, message: message}
    if(!command) return;

    try {

        command.execute(data, args)
    } catch (e) {
        console.log(e)
    }
});

// function getByValue(map, searchValue) {
//     for (let [key, value] of map.entries()) {
//         if (value?.aliases?.includes(searchValue)){
//             return key;
//         }
//     }
// }
