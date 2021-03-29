// first we export the object to app.js
module.exports = {
    // here is the main name of the command
    name: 'thisCmd',
    // this is what the user will see when they type "[prefix]help thisCmd"
    description: 'describe this command',
    // you can have as many aliases as you like. aliases can be used instead of the main command
    aliases: ['cmd', 'this'],
    // this will show the use when calling the help command
    usage: '[compliment user]',
    // here you can define what the command does
    execute(data, args) {
        // in this example we check if there are any arguments
        if(!args[0]){
            // if the use did not pass any arguments we will compliment them
            data?.app?.bot?.sendMessage(`${data?.message.author._username} is the best`).then()
            // we could also just message the user as a whisper and @ them
            data.message.reply([' is Awesome!'], {whispered: true, mentionUser: true}).then()
        } else {
            // if they did we will compliment the argument
            data?.app?.bot?.sendMessage(`${args[-1]} is the best`).then()
        }
    }
};

