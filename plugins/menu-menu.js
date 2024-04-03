import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {
let vn = 'https://qu.ax/xbeU.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `🌺 ${wm} 🌺

🥀*𝑯𝒐𝒍𝒂 𝒄𝒐𝒎𝒐 𝒆𝒔𝒕𝒂 ${taguser}*🥀

🌸 𝑪𝒓𝒆𝒂𝒅𝒐𝒓𝒂: 𝑩𝒍𝒆𝒓𝒌
🌸 𝑵𝒖𝒎𝒆𝒓𝒐 𝒅𝒆 𝒍𝒂 𝒄𝒓𝒆𝒂𝒅𝒐𝒓𝒂: ${bot}
🌸 𝑪𝒐𝒏𝒕𝒂𝒄𝒕𝒐: ${asistencia}
🌸 𝑻𝒊𝒆𝒎𝒑𝒐 𝒂𝒄𝒕𝒊𝒗𝒐: ${uptime}
🌸 𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔: ${Object.keys(global.db.data.users).length}
🌸 𝑹𝒆𝒈𝒖𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒔: ${rtotalreg} de ${totalreg} ${(conn.user.jid == global.conn.user.jid ? '' : `\n□ *𝑺𝒐𝒚 𝒖𝒏 𝒔𝒖𝒃 𝒃𝒐𝒕 𝒅𝒆:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}
  
> 𖣔𝑰𝒏𝒇𝒐 𝒅𝒆𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𖣔

> 🌸 *𝑹𝒆𝒈𝒖𝒊𝒔𝒕𝒓𝒂𝒅𝒐* ${user.registered === true ? '✅' : '❌ _#verificar_'}
> 🌸 *𝑽𝑰𝑷* ${user.premiumTime > 0 ? '✅' : '❌ _#pase premium_'}
> 🌸 *𝑬𝒔𝒕𝒂𝒅𝒐 𝒅𝒆𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐* ${typeof user.miestado !== 'string' ? '_#miestado || Estado no asignado_' : '_Me siento ' + user.miestado + '_'}

> 🌸 *𝑵𝒊𝒗𝒆𝒍* ${level}
> 🌸 *𝑫𝒊𝒂𝒎𝒂𝒏𝒕𝒆𝒔* ${limit}
> 🌸 *𝑪𝒐𝒊𝒏𝒔* ${money}
> 🌸 *𝑻𝒐𝒌𝒆𝒏𝒔* ${joincount}
> 🌸 *𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒊𝒂* ${exp}
> 🌸 *𝑹𝒂𝒏𝒈𝒐* ${role}
${readMore}

╭━         *᯾𝑭𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔 𝒄𝒐𝒎𝒋𝒖𝒏𝒕𝒂𝒔᯾*
┃✿︎🌺 _${usedPrefix}s (Para crear stikers)_
┃✿︎🌺 _${usedPrefix}play (Audio y video)_
┃✿︎🌺 _${usedPrefix}play2 (Audio y video)_
┃✿︎🌺 _${usedPrefix}play3 (Audio y video)_
┃✿︎🌺 _${usedPrefix}play4 (Audio y video)_
┃✿︎🌺 _${usedPrefix}minar_
┃✿︎🌺 _${usedPrefix}reg1 (Para reguistrarse)_
┃✿︎🌺 _${usedPrefix}unreg (Anular reguistro)_
┃✿︎🌺 _${usedPrefix}daily_
┃✿︎🌺 _${usedPrefix}cadahora_
┃✿︎🌺 _${usedPrefix}semanal_
┃✿︎🌺 _${usedPrefix}claim_
┃✿︎🌺 _.on off (Para ver las funciones)_ 
┃✿︎🌺 _términos y condiciones_
┃✿︎🌺 _${usedPrefix}tictoc_
┃✿︎🌺 _${usedPrefix}mediafire_
┃✿︎🌺 _${usedPrefix}fb (Para descargar videos de faceboock_
┃✿︎🌺 _${usedPrefix}hd (Para poner las imagenes en HD_
┃✿︎🌺 _${usedPrefix}qr (Combierte en qr)_
┃✿︎🌺 _${usedPrefix}ia (Inteligencia artificial_
┃✿︎🌺 _${usedPrefix}chatgpt_
┃✿︎🌺 _${usedPrefix}chatgpt1_
┃✿︎🌺 _${usedPrefix}chatgpt2_
┃✿︎⚠️ _${usedPrefix}killmenu_ ⚠️
┃✿︎🌺 _${usedPrefix}work_
┃✿︎🌺 _${usedPrefix}transferir_
┃✿︎🌺 _${usedPrefix}tagall (Invocar grupo)_
┃✿︎🌺 _${usedPrefix}cofre_
┃✿︎🌺 _${usedPrefix}shop_
┃✿︎🌺 _${usedPrefix}prem_
┃✿︎🌺 _${usedPrefix}top_
┃✿︎🌺 _${usedPrefix}lvl_
┃✿︎🌺 _${usedPrefix}nivel_
> ᯾𝑪𝒐𝒎𝒂𝒏𝒅𝒐𝒔/𝒇𝒖𝒏𝒄𝒊𝒐𝒏𝒆𝒔 +18᯾
║ 𖤈 🔥 _.pack_
║ 𖤈 🔥 _.pack2_
║ 𖤈 🔥 _.pack3_
║ 𖤈 🔥 _.videoxxx_
║ 𖤈 🔥 _.videolesbixxx_
║ 𖤈 🔥 _.tetas_
║ 𖤈 🔥 _.booty_
║ 𖤈 🔥 _.ecchi_
║ 𖤈 🔥 _.furro_
║ 𖤈 🔥 _.imagenlesbians_
║ 𖤈 🔥 _.panties_
║ 𖤈 🔥 _.pene_
║ 𖤈 🔥 _.porno_
║ 𖤈 🔥 _.randomxxx_
║ 𖤈 🔥 _.pechos_
║ 𖤈 🔥 _.yaoi_
║ 𖤈 🔥 _.yaoi2_
║ 𖤈 🔥 _.yuri_
║ 𖤈 🔥 _.yuri2_
║ 𖤈 🔥 _.trapito_
║ 𖤈 🔥 _.hentai_
║ 𖤈 🔥 _.nsfwloli_
║ 𖤈 🔥 _.nsfworgy_
║ 𖤈 🔥 _.nsfwfoot_
║ 𖤈 🔥 _.nsfwass_
║ 𖤈 🔥 _.nsfwbdsm_
║ 𖤈 🔥 _.nsfwcum_
║ 𖤈 🔥 _.nsfwero_
║ 𖤈 🔥 _.nsfwfemdom_
║ 𖤈 🔥 _.nsfwglass_
║ 𖤈 🔥 _.hentaipdf *<texto>*_
║ 𖤈 🔥 _.hentaisearch *<texto>*_
╭━     *[ 𝑷𝒓𝒐𝒑𝒊𝒆𝒕𝒂𝒓𝒊𝒐 ]*
┃👑 _${usedPrefix}join *enlace*_
┃👑 _${usedPrefix}dardiamantes *cantidad*_
┃👑 _${usedPrefix}darxp *cantidad*_
┃👑 _${usedPrefix}darcoins *cantidad*_
┃👑 _${usedPrefix}addprem *@tag* *cantidad*_
┃👑 _${usedPrefix}addprem2 *@tag* *cantidad*_
┃👑 _${usedPrefix}addprem3 *@tag* *cantidad*_
┃👑 _${usedPrefix}addprem4 *@tag* *cantidad*_
┃👑 _${usedPrefix}idioma_
┃👑 _${usedPrefix}cajafuerte_
┃👑 _${usedPrefix}bc *texto*_
┃👑 _${usedPrefix}bcc *texto*_
┃👑 _${usedPrefix}comunicarpv *texto*_
┃👑 _${usedPrefix}broadcastgc *texto*_
┃👑 _${usedPrefix}comunicargrupos *texto*_
┃👑 _${usedPrefix}borrartmp_
┃👑 _${usedPrefix}delexp *@tag*_
┃👑 _${usedPrefix}delcoins *@tag*_
┃👑 _${usedPrefix}deldiamantes *@tag*_
┃👑 _${usedPrefix}reiniciar_
┃👑 _${usedPrefix}update_
┃👑 _${usedPrefix}addprem *@tag*_
┃👑 _${usedPrefix}delprem *@tag*_
┃👑 _${usedPrefix}listprem_
┃👑 _${usedPrefix}añadirdiamantes *@tag cantidad*_
┃👑 _${usedPrefix}añadirxp *@tag cantidad*_
┃👑 _${usedPrefix}añadircoins *@tag cantidad*_
┃👑 _${usedPrefix}ilimitado_
*╰━━━━━━━━━━━━⬣*`.trim()
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m })
await conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: 'Aga', previewType: 0, thumbnail: imagen3, sourceUrl: [md, yt, tiktok].getRandom()}}})
	  
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|menucompleto|allmenu|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}  
