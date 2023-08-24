/*
 █▀▀█ █░▒█ █▀▀▀ █▀▀▀ █▄░▒█       █▀▀▀ █░░░ ▀█▀ █▀▀▀█ █▀▀█
 █░▒█ █░▒█ █▀▀▀ █▀▀▀ █▒█▒█       █▀▀▀ █░░░ ░█░ ▀▀▀▄▄ █▄▄█
 ▀▀█▄ ▀▄▄▀ █▄▄▄ █▄▄▄ █░░▀█       █▄▄▄ █▄▄█ ▄█▄ █▄▄▄█ █░▒█

Mishri MD Bot By Dr Blue Pixel Dream ( Ryan T Ropah )
WHATSAPP - 263780177755
SUPPORT GROUP - https://chat.whatsapp.com/I2tEA3GRu4M5gdsxeFf3vY
YOUTUBE - http://youtube.com/ultravioletmedia27


ℹ️ SPECIAL INFORMATION ℹ️

Welcome to Mishri MD WhatsApp Bot settings.js.
Information provided to you.
If you use true or false
true = if you want to do that task
false = return if you don't want to do the task.
When you change the ones inside the commas, change them correctly.
If you are using X Video Downloader, you need to get permission from Bot Devoper. 

*/

const fs = require('fs')
const chalk = require('chalk')

/*
⚙️ BOT SETTINGS  ⚙️
*/
//👇 if you need seen message use " true " , මැසේජ් සීන් කරන්න ඔනි නම් true දාන්න ඔනි නැත්තම් false දාන්න
global.READ_MASSAGE = false
//👇 enable DISABLE Girls Voice Reply , Auto Voice Reply යවන්න ඔනි නම් true දාන්න 
global.VOICE_REPLY = false
//👇 Do you want show time on your bio use "true" want DISABLE use "false" , ස්වයං ක්‍රීය Bio එක ඔනි නම් true දාන්න
global.AUTO_BIO = false
//👇 Inbox message block PM block , ඉන්බොක් බ්ලොක් 
global.INBOX_BLOCK = true
//👇 Auto react  , ස්වයංක්‍රීය රියක්ට්
global.AUTO_REACT = true
//👇 Bad word Auto delete ( you must add bad words ) නරක වචන ඩිලීට් කිරීම , ඔබ විසින් වචන දැමිය යුතුය 
global.ANTI_BADWORD = true
//👇 Kick And Auto Delete Group link Senders , ස්මූහ ස්බැදි දමන අයව ඉවත් කරයි
global.ANTI_G_LINK = true
//👇 212 Number block
global.NUMBER_212_BLOCK = false
//👇 Send Welcome ( true or false ) වෙල්කම් ගූඩ් බායි මැසේජ් යවන්න ඔනි නම් 
global.SEND_WELCOME = true
global.SEND_GOODBYE = true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Send Auto reply , sticker , voice Use true and costemize your own 
global.AUTO_FUNCTION = true
//👇 Put Bot Offline
global.BOT_OFFLINE = false
//👇 Only PreFix [ true / false ]
global.ONLY_PREFIX = true
//👇 This uplaod youtube videos without limit ⚠️ if you use this you must have paid sever
global.UPLOAD_MAX = false
//👇 Disabale Bot inbox ඉන්බොක්ස් බ්ලොක් නොවී වැඩ නොකරන්නනම් 
global.DISABLE_INBOX = false 
//👇 DISABLE inbox message send ඉන්බොක්ස් වැඩනොකරන බවට මැසේජ් එක යැවිම true or false 
global.DISABLE_INBOX_MESSAGE_SEND = false
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = false
//👇 Only Inbox Use ( Only PM Work )
global.INBOX_ONLY_WORK = false
//👇 Auto ChatGPT ( You Must put CHATGPT API KEY For use this )
global.AUTO_OPEN_AI = false
//👇 Bot On Privet
global.PRIVET_BOT = false
//👇 DISABLE Bot Commands But Others Are Working 
global.DISABLE_COMMANDS = false
//👇 DISABLE Bot Commands On Message Send On Off
global.DISABLE_COMMAND_MESSAGE_SEND = false 
global.AUTO_SEEN_STATUS = true



/*
       ✨ BOT INFO SETTINGS ✨
*/
// You Bots Owner Number 
global.owner = ['263780177755'] 
//👇 Your Caption ( Image Video )
global.cap = '©Created 𝙱y Mishri MD, Tech By Dr Blue Pixel Dream'
//👇 Your Bot Name
global.botnma =  'Mishri 𝚳𝐃' 
//👇 Your name
global.ownernma =  'Dr Blue Pixel Dream' 
//👇 Sticker Author Name
global.packname =  'Ryan-Mishri' 
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  '❄'
//👇 Song Download Massage 
global.SONG_DOWN = '```⬇️ Downloading Your Very Nice Song...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```⬆️ Uploding Your Song...```'
//👇 Menu imoji 
global.MENU_IMOJI = '🌹|❄'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = 'apikey get on removebg.com'
//👇 Change Bot Language 
global.LANG = 'EN'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://graph.org/file/7c96622870d02490e9943.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `default`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || ``
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || ``
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 DISABLE PM Block numbers
global.NO_BLOCK = ["263780177755","263716913622","263774537857","263773895586"]
//👇 DISABLE download words
global.IMG_BLOCKER = ["xxx","sex","mia"]
//👇 Open ai API Put Withouth "sk-" ( "sk-" අයින් කරල ඉතුරු ටික දාන්න )
global.CHATGPT_API = ''
//👇 Sex  video Download Allowed Groups
global.SEX_DOWNLOAD_GROUPS = ['120363147404508506@g.us']
//👇 Your Bot Group Link
global.GROUP_LINK = 'https://chat.whatsapp.com/I2tEA3GRu4M5gdsxeFf3vY'
/*

   🍃 OTHER 🍃

*/
global.PORT = process.env.PORT ||  '8000'
global.zenzapi = '01ABEB1E11'
/*

💬 MESSAGE 💬

*/
global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner, Ryan or his mother !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    IMG_BLOCK : "This Word is Ban from image downloader",
    DISABLE_INBOX : "Inbox DISABLE By Bot Owner Please Only Use Groups",
    ONLY_SEX_GROUP : "Adult Video Download Only Allowed On This Group \n\n https://chat.whatsapp.com/JYAg2lMpRTF2bgkeFCxsvf",
    DISABLE_CMD : "🚫 Commands Are DISABLE by owner",
    BAD_DETECT : '',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}




//other
global.pemilik = ['263780177755'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['263780177755'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = 'Dr Blue Pixel Dream' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['.'] 
global.sp = '🌹'
global.weem = 'Mishri MD'

global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//global.alivelogo = `https://graph.org/file/7c96622870d02490e9943.jpg`
global.imgalive = fs.readFileSync('./Media/image/Elisa.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
