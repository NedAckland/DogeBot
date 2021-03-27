module.exports = {
    name: 'compliment',
    description: 'compliment someone',
    aliases: ['flatter', 'a'],
    usage: '[compliment user]',
    execute(data, args) {
        if(!args[0]){
            data?.app?.bot?.sendMessage(`${data?.message.author._username} is the best`).then(() => console.log())
        } else {
            data?.app?.bot?.sendMessage(`${args[0]} is the best`).then(() => console.log())
        }
    }
};
