let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *PULSA:* [082322153431]
┣➥ *DANA:* [082322153431]
┣➥ *GOPAY:* [082322153431]
┣➥ *OVO:* [082322153431]
┃ 「 *CHAT OWNER* 」
┃ > *Ingin donasi? https://wa.me/6282322153431*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
