# DogeBot
### The Botman repo

## Setup
1. Clone repo
1. run 'npm i' in terminal
1. Go to https://dogehouse.tv
1. Open Developer options (F12 or Ctrl+Shift+I)
1. Go to Application > Local Storage > dogehouse.tv
1. Copy your token and refresh-token and put them in an .env file:

DOGEHOUSE_TOKEN=your-token
DOGEHOUSE_REFRESH_TOKEN=your-refresh-token


### How to add commands to the bot
1. add folder in ./commands with your name
2. make a new .js file in that folder with the name of the command
3. add object to your new file and define its execution and name
```javascript
module.exports = {
    name: 'name-of-command',
    description: 'what is it , how does it work?',
    aliases: ['this', 'that],
    execute(data) {
        data.message.reply(['send whisper reply'], {whispered: true, mentionUser: true})
        data?.app?.bot?.sendMessage('send to main chat').then((response) => console.log(response)) // optional chaining is a preference
    },
};
```
3. reload the bot 
4. test command in chat. prefix: -.
 
*the default prefix is set in config.json*

##

