/*
› Create By @RIY
› Base Ori @DikaArdnt
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['62895388375000','6285893400504','62895388375000'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['62895388375000'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '62895388375000' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Owner KeniBotz' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'KeniBotz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Kenichi' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://www.youtube.com/channel/UCf16UupgKYIvhb-o7GItHGQ'
global.ig = 'https://instagram.com/kenibotz_kenichi'
global.mygc = 'https://chat.whatsapp.com/Ipy7Jjgvq3FKhIMCjvjX1N'
global.myweb = 'wa.me/62895388375000'
global.email = 'kenichiytch@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© KeniBotz' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Kenichi' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 25,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/kenibotz.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/image-welcome-05-26'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Done._',
admin: '_Fitur Ini Khusus Admin Group Ya Sayang <3_',
botAdmin: '_Bot Harus Menjadi Admin Dulu Yank <3_',
owner: '_Fitur Ini Khusus Untuk Owner Kenichi Dan Mahesa_',
group: '_Fitur Ini Digunakan Hanya Untuk Group Kak♥️_',
private: '_Fitur Digunakan Hanya Untuk Private Chat Jadi Chat Ke Whatsapp Aku Ya <3_',
bot: '_Fitur Khusus Pengguna Nomor Bot Ini Doang_',
wait: '_Sedang Di Proses Ya Kak..._',
error: '_Fitur Sedang Error Kak Maaf Ya :(_',
endLimit: '_Limit Harian Kamu Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
