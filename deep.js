const { 
  WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  prepareMessageFromContent, 
  Browsers,
  processTime
} = require("@adiwajshing/baileys")
const fs = require('fs')
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./lib/banned.js')
const prefix = '/'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./deep.json') && client.loadAuthInfo('./deep.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./deep.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

client.on('chat-update', async (deep) => {
try {	  
if (!deep.hasNewMessage) return
if (!deep.messages) return
if (deep.key && deep.key.remoteJid == 'status@broadcast') return

deep = deep.messages.all()[0]
if (!deep.message) return
global.blocked
deep.message = (Object.keys(deep.message)[0] === 'ephemeralMessage') ? deep.message.ephemeralMessage.message : deep.message
const from = deep.key.remoteJid
const type = Object.keys(deep.message)[0]        
const quoted = type == 'extendedTextMessage' && deep.message.extendedTextMessage.contextInfo != null ? deep.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const typeQuoted = Object.keys(quoted)[0]
const content = JSON.stringify(deep.message)
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const body = deep.message.conversation || deep.message[type].caption || deep.message[type].text || ""
const Smname = deep.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const mentionByTag = type == "extendedTextMessage" && deep.message.extendedTextMessage.contextInfo != null ? deep.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && deep.message.extendedTextMessage.contextInfo != null ? deep.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        const mentions = (teks, memberr, id) => {
	(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: deep, contextInfo: {"mentionedJid": memberr}})
	}
chats = (type === 'conversation') ? deep.message.conversation : (type === 'extendedTextMessage') ? deep.message.extendedTextMessage.text : ''
budy = (type === 'conversation' && deep.message.conversation.startsWith(prefix)) ? deep.message.conversation : (type == 'imageMessage') && deep.message.imageMessage.caption.startsWith(prefix) ? deep.message.imageMessage.caption : (type == 'videoMessage') && deep.message.videoMessage.caption.startsWith(prefix) ? deep.message.videoMessage.caption : (type == 'extendedTextMessage') && deep.message.extendedTextMessage.text.startsWith(prefix) ? deep.message.extendedTextMessage.text : ''

if (prefix != "") {
if (!body.startsWith(prefix)) {
cmd = false
comm = ""
} else {
cmd = true
comm = body.slice(1).trim().split(" ").shift().toLowerCase()
}
} else {
cmd = false
comm = body.trim().split(" ").shift().toLowerCase()
}
const command = comm

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['34640810893@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const isBan = cekBannedUser(sender, ban)
const deus = senderNumber == botNumber
const sender = deep.key.fromMe ? client.user.jid : isGroup ? deep.participant : deep.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = deep.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = deep.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

mess = {
			wait: '⌛ 𝐄𝐍 𝐏𝐑𝐎𝐂𝐄𝐒𝐎 ⌛',
			success: '✔️ 𝙎𝙐𝙎𝙎𝙀𝙎 ✔️',
			ferr: 'Intentalo de nuevo mas tarde',
			error: {
			stick: '[❗] 𝙀𝙍𝙍𝙊𝙍 intentalo de nuevo, da error a la primera:D  ❌',
			Iv: '❌ Link invalido ❌'
			},
			only: {
    			group: '[❗] ¡Este comando solo se puede usar en grupos! ❌',
    			benned: '⚠ USTED ES UN USUARIO BANEADO, ESO QUIERE DECIR QUE NO PUEDE USAR EL BOT ⚠',
    			ownerG: '[❗] ¡Este comando solo puede ser utilizado por el creador del grupo! ❌',
    			ownerB: '[❗] ¡Este comando solo puede ser utilizado por el creador del bot! ❌',
    			admin: '[❗] ¡Este comando solo puede ser utilizado por administradores del grupo! ❌',
    			Badmin: '[❗] ¡Este comando solo se puede usar cuando el bot es administrador! ❌'
  			}
			}
switch (command) {
                
case 'menu':
case 'help':
dee = fs.readFileSync(`./deep/deep1.jpg`)                
reply('ESPERE EL MENU') 
menu = `╭═✦͜͡ৡৢ┅╡༊DeepBot࿑╞┅ৡৢ͜͡✦═╮*
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟ *      
║◄🔥┢┅ீ͜ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┅┧🔥►
║┊:      ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈  
║┊:𝑪𝒓𝒆𝒂𝒅𝒐𝒓 : ꪶᬊ͜͡𝓐𝓕𝓜 ⛧⃟🔥
║┊:𝑵𝒖𝒎𝒆𝒓𝒐 : wa.me/+34640810893
║┊:YT : ꪶᬊ͜͡𝓐𝓕𝓜 ⛧⃟🔥
║┊:      ┈ ┈ ┈ ┈ ┈  ┈ ┈ ┈ 
║◄🔥┢┅ீ͜ৡৢ͜͡✦━◇━ீ͜ৡৢ͜͡✦┅┧🔥►
║┊: * ⃟ ⃟  ━ೋ๑——๑ೋ━ ⃟ ⃟ *      
╰═✦͜͡ৡৢ┅╡༊DeepBot࿑╞┅ৡৢ͜͡✦═╯
╭▬▬▬▬▬▬▬ *˚✯ཻ⸙ ̥•┉┉•
⊱✦•COMANDOS
▋╭┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅   
▋──⊱${prefix}bot
■█🔥█■▰▱▰▱▰▱■█🔥█■`
client.sendMessage(from, dee, image, {quoted: deep, caption:menu})
break        

case 'ban':
if (!deus) return reply(mess.only.ownerB)
mentioned = deep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addBanned(mentioned[0], args[1], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
} else if (isQuotedMsg) {
if (quotedMsg.sender.match('34640810893')) return reply(`🤨`)
addBanned(quotedMsg.sender, args[1], ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
} else if (!isNaN(args[1])) {
addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido baneado, lo que significa que no podra usar el bot!`, mentioned, true)
}
break
                
case 'unban':
if (!deus) return reply(mess.only.owner)
mentioned = deep.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
unBanned(mentioned[i], ban)
}
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
}if (isQuotedMsg) {
unBanned(quotedMsg.sender, ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
} else if (!isNaN(args[0])) {
unBanned(args[0] + '@s.whatsapp.net', ban)
mentions(`@${mentioned[0].split('@')[0]} Usted a sido desbaneado, ahora podra usar el bot!!`, mentioned, true)
}
break    
    
case 'bot':
client.sendMessage(from, 'Hola, soy DeepBot, estoy recien pogramandose, espere a que haya mas comandos', text, {quoted : deep})
break
 
case 'mha':
const imagen = fs.readFileSync('./deep/deep1.jpg')
reply(mess.wait)
client.sendMessage(from, imagen, MessageType.image, {quoted: deep, caption: "endeavor san"})
break 
                
case 'dj':
const audio = fs.readFileSync('./deep/deep2.mp3')
client.sendMessage(from, audio, MessageType.audio, ptt: true, {quoted: deep})
break                
}

} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
