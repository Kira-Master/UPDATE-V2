let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "HALO KAK\nSaya GENERAL BOTZ`\nPilih Menu Di Bawah Yaa\nDan Jangan Lupa Baca Dibawah ini\n\nSpam = Banned\nTelp = Blok\n\n\nJoin Group WhatsApp\nhttps://chat.whatsapp.com/KRUXS23p3ZtLD6MYvQfoiF\n\nFollow Me\nIG : *@kii1raaa_*",
                        "description": "*Β©KIRA - MASTER π₯*",
                        "buttonText": "GENERAL BOTZ MENU π₯",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Download Menu`,
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".downloadmenu"
                                    },{
                                        "title": "Database Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".dbmenu"                 
                                    },{
                                        "title": "Button Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".button"                 
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".allmenu"                 
                                    },{
                                        "title": "Jadibot Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".jadibotmenu"                 
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".ownermenu"                 
                                    },{
                                        "title": "Hentai Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".hentaimenu"                 
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".absenmenu"                 
                                    }, {
                                        "title": " Group Setting",
                                        "description": "\nBY GENERAL BOTZ π₯",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu']
handler.register = true
module.exports = handler