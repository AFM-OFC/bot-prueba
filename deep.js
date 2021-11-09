const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const { wait, h2k, generateMessageID, getGroupAdmins, banner, start, info, success, close } = require('./lib/functions')
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

mess = {
			wait: 'ESPERE',
	                success: 'HECHO CON EXITO'
	                only: {
	                ownerB: 'QUIEN ERES TU PARA DECIRME QUE TENGO QUE HACER'
  			}
			}

const arg = chats.slice(command.length + 2, chats.length)
const args = budy.trim().split(/ +/).slice(1)
const isCmd = budy.startsWith(prefix)
const q = args.join(' ')
const soyYo = client.user.jid
const botNumber = client.user.jid.split("@")[0]
const ownerNumber = ['34640810893@s.whatsapp.net']
const isGroup = from.endsWith('@g.us')
const reply = (teks) => {
client.sendMessage(from, teks, text, {quoted: deep})
			}
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
deepbot = (type === 'buttonsResponseMessage') ? client.message.buttonsResponseMessage.selectedDisplayText : '' 
const conts = deep.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = deep.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'
switch (command) {
case 'menu':
case 'help':
dee = fs.readFileSync(`./deep/deep1.jpg`);      
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
▋──⊱${prefix}dj
■█🔥█■▰▱▰▱▰▱■█🔥█■`
client.sendMessage(from, dee, image, caption: menu)
break
                


case 'ban':
if (!isMe) return reply(mess.only.ownerB)
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
if (!isMe) return reply(mess.only.owner)
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
default:
}
}
} catch (e) {
        
console.log(e)}
        
})      
}
iniciar ()
.catch (err => console.log("unexpected error: " + err))
