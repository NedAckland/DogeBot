module.exports = {
    name: 'roulette',
    description: 'do a thing',
    aliases: ['r', 'risk'],
    execute(client) {
        const users = (client?.app?.rooms?.current?.users)
        const userList = []
        users.then(r => {
            r.forEach(user => userList.push(user._username))
            client?.app?.bot?.sendMessage(`${userList[Math.floor(Math.random()*userList.length)]} you've been chosen`).then(() => console.log(''))
        })
    }
};
