const bots = require('../../common/getAllBots')

module.exports = {
    name: 'roulette',
    description: 'choose a random bot from the room',
    aliases: ['r', 'risk', 'who'],
    execute(data) {
        const users = (data?.app?.rooms?.current?.users)
        const userList = []
        users.then(r => {
            r.forEach(user => userList.push(user._username))
            const botsFound = []

            botsFound.push(userList.filter(user => bots.includes(user)));
            const botsInRoom = botsFound[0]
            const unluckyBot = botsInRoom[Math.floor(Math.random()*botsInRoom.length)]
            data.message.reply([`${unluckyBot} has been chosen`]).then()
        })
    }
};
