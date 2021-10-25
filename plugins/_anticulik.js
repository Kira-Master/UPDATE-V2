let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6282322153431
• *Telkomsel:* 6282322153431
• *Indosat:* 6282322153431

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/kii1raaa_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6282322153431', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler