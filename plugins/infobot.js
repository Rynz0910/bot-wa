let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
*The bot is made on termux*
Thanks to:
*@Nurutomo*
 *•「Youtube Nurutomo:」*
https://youtube.com/channel/UCNTBwNuH3nfhtrgyU7YDwCg
*Jangan lupa SUBSCRIBE Ya*

*•「Whatsapp groups:」*
https://chat.whatsapp.com/CjwIwY1Q9ZN0GT2JmM6ukp
*Jangan lupa gabung*
`.trim(), m)
}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(infobot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

