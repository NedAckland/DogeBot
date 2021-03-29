// require the API and set up
require("dotenv").config();
const { Client } = require('dogehouse.js');
const fs = require("fs");

// get the prefix which you can set in config.json
const { prefix } = require('./config.json');

// to retrieve the command aliases without adding clutter to the app.js
const getByValue = require('./common/getCommandAliases.js');

// get all the command folders
const commandFolders = fs.readdirSync('./commands');

// initialise the app
const app = new Client();

// create a new map object for all our commands.
// for more info on Map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const commands = new Map;

// check all folders within the ./commands folders
for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        // require all the commands
        const command = require(`./commands/${folder}/${file}`);

        // set each command to the commands Map object
        commands.set(command.name, command);
    }
}

// connect the app using our tokens
app.connect(process.env.DOGEHOUSE_TOKEN, process.env.DOGEHOUSE_REFRESH_TOKEN).then(async () => {

    // confirm that the connection was a success
    console.log('Bot connected!');

    // here we can choose the room to join.
    // visit dogehouse.tv and enter the room you want to connect to, you will find the id in the url, copy and past that here
    app.rooms.join("2293ef87-2d6b-42f2-bcf9-68ee71438b1b");

}).catch((e) => console.log(e))

// here we listen to the channels chat
app.on('newChatMessage', message => {

    // first we check if the message in the channel was meant fo the bot by checking the prefix.
    // if the prefix doesn't match we can ignore the message
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // now we have confirmed the message is meant for our bot, we can remove the prefix and split the message to an array
    const args = message.content.slice(prefix.length).trim().split(/ +/);

    // remove the first item from the array and placing it in the commandName variable
    const commandName = args.shift().toLowerCase();

    // commands is the Map object we can retrieve out command object from
    // we search commands using commandName and return the data to command
    // if the message contains an alias then we will just use that to set the command
    const command = commands.get(commandName) || commands.get(getByValue(commands, commandName))

    // place everything we might need in a data object for easy retrieval later
    const data = {commands: commands, app: app, message: message}

    // check to see if the commandName search found any matches from the commands Map object
    if(!command) return;

    try {
        // call the command execute function which is defined within a directory in the ./commands directory
        command.execute(data, args)

    } catch (e) {
        // log out any issues
        console.log(e)

    }
});
