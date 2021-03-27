module.exports = {
    name: 'soggy_biscuit',
    description: 'do a thing',
    aliases: ['soggy', 'biscuit', 'eat'],
    execute(data) {
        const users = (data?.app?.rooms?.current?.users)
        const userList = []
        users.then(r => {
            r.forEach(user => userList.push(user._username))
            data?.app?.bot?.sendMessage(`${userList[Math.floor(Math.random()*userList.length)]} has to eat the soggy biscuit`).then(() => console.log(''))
        })
    }
};
