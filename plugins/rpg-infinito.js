//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import(global.baileys)).default
//SOLO USA SI ERES EL/LA PROPIETARIO(A) DEL BOT PARA TENER TODO ILIMITADO O USA EL COMANDO PREMIUM Jajaj
let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*𝐄𝐱𝐢𝐭𝐨 𝐡𝐮𝐬𝐭𝐞𝐝 𝐲𝐚 𝐭𝐢𝐞𝐧𝐞 𝐭𝐨𝐝𝐨 𝐈𝐥𝐢𝐦𝐢𝐭𝐚𝐝𝐨!!*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        
}
handler.help = ['cheat']
handler.tags = ['owner']
handler.command = /^(ilimitado|infiniy)$/i
handler.rowner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
//handler.money = 0

export default handler
