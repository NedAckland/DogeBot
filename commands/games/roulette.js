module.exports = {
    name: 'roulette',
    description: 'do a thing',
    aliases: ['r', 'risk', 'who'],
    execute(data) {
        const users = (data?.app?.rooms?.current?.users)
        const userList = []
        users.then(r => {
            r.forEach(user => userList.push(user._username))
            data?.app?.bot?.sendMessage(`${userList[Math.floor(Math.random()*userList.length)]}`).then(() => console.log(''))
        })
    }
};
