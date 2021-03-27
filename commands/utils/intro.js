module.exports = {
    name: 'hi',
    description: 'A little about me',
    aliases: ['introduce', 'intro'],
    execute(data) {
        data?.app?.bot?.sendMessage(intros[Math.floor(Math.random()*intros.length)])
    }
};


const intros = ["I'm botman", "I believe what doesn kill you simply makes you stranger" ,"Endure, Master Wayne. Take it. They’ll hate you for it, but that’s the point of Batman, he can be the outcast. He can make the choice that no one else can make, the right choice", "You either die a hero or live long enough to see yourself become the villain", "The night is darkest just before the dawn. And I promise you, the dawn is coming.", "un-un-nu-nu bot mannnnn"]
