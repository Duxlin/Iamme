// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/GzT2sSzrl0kG4ehd5w1Cnf'
global.ig = '@DUX' // ubah aja
global.email = 'botdux@gmail.com' //serah
global.region = 'Alien Realm' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Dux' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['2347082252014'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = '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'
//====================BY Hw Mods=============================//
global.botname = 'Dux Bot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'Dux Bot' // ubah aja ini nama sticker
global.author = 'Dux' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})