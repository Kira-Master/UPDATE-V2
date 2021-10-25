function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '6283144570377', 'RakuChan', m)
stc = conn.sendContact(m.chat, '6282322153431', 'KIRA - MASTER', m)
  conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Developer G E N E R A L B O T *', 'status@broadcast')
}
handler.command = ['owner']

module.exports = handler