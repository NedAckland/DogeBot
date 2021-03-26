module.exports = {
    name: 'compliment',
    description: 'compliment someone',
    aliases: ['flatter', 'a'],
    execute(client, args) {
        if(!args[0]){
            client?.app?.bot?.sendMessage(`${client?.message.author._username} is the best`).then(() => console.log())
        } else {
            // const users = (client?.app?.rooms?.current?.users);
            //
            // users.then(r => console.log(r._username))
            client?.app?.bot?.sendMessage(`${args[0]} is the best`).then(() => console.log())
        }
    }
};
