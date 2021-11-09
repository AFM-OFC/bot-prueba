const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./deep/baner");
const prefix = '/'

async function iniciar () { 
        const client = new WAConnection()
//Aquí el "client" lo pueden cambiar a su gusto. Pero si cambian, tendrán que cambiar todos los "client" por el cambio que hicieron.
        client.logger.level = 'warn'

//llamar al código QR
        client.on('qr', () => {
        })

//crear un archivo Json para guardar información: ID del cliente, Token y Keys del cliente y del SERVER.
        fs.existsSync('./Samu330.json') && client.loadAuthInfo('./Samu330.json')

//Conectando o reconectando
        client.on('connecting', () => {
        console.log('Conectando')
        })

//La conexión fue en éxito👌🏻
        client.on('open', () => {
        console.log('Conectado exitosamente :D')
        })
        await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./Samu330.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        

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
  mess = {
          wait: "ESPERE PORFAVOR"
  },
      only: {
              deus: "ESE COMANDO SOLO LO PUEDE USAR MI CREADOR"
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
const sender = deep.key.fromMe ? client.user.jid : isGroup ? deep.participant : deep.key.remoteJid
const senderNumber = sender.split("@")[0]
const isMe = senderNumber == botNumber
const conts = deep.key.fromMe ? client.user.jid : client.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = deep.key.fromMe ? client.user.name : conts.notify || conts.vname || conts.name || '-'

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
