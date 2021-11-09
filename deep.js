const { WAConnection } = require('@adiwajshing/baileys');
const fs = require('fs');

async function iniciar () { 
        const deusafm = new WAConnection()

        deusafm.logger.level = 'warn'

        deusafm.on('qr', () => {
        })

        fs.existsSync('./conect/deep.json') && client.loadAuthInfo('./conect/deep.json')

        deusafm.on('connecting', () => {
        console.log('Conectando DeepBot')
        })

        deusafm.on('open', () => {
        console.log('DeepBot Conectado exitosamente :D')
        })
        await deusafm.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./conect/deep.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
        }

iniciar ()
.catch (err => console.log("unexpected error: " + err))
