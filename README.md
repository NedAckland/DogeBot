# DogeBot
### The Botman repo

### feel free to make a PR and grow to bot.

## Setup
1. Clone repo
1. npm i
1. Go to https://dogehouse.tv
1. Open Developer options (F12 or Ctrl+Shift+I)
1. Go to Application > Local Storage > dogehouse.tv
1. Copy your token and refresh-token and put them in an .env file:

DOGEHOUSE_TOKEN=your-token
DOGEHOUSE_REFRESH_TOKEN=your-refresh-token


### How to add commands to the bot
1. add folder in ./commands with your name
2. add object 
module.exports = {
    name: 'name-of-command',
    description: 'what is it , how does it work?',
    aliases: ['this', 'that],
    execute(client) {
        client.message.reply(['send whisper reply'], {whispered: true, mentionUser: true})
        client?.app?.bot?.sendMessage('send to main chat').then((response) => console.log(response)) // optional chaining is a preference
    },
};
3. reload the bot 
4. test command
# the default prefix is set in config.json, it is currently: "-" # 
