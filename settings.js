const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94764570094'] //ur owner number
global.ownernomer = "94764570094" //ur owner number2
global.ownername = "🦄Dilla Editz" //ur owner name
global.ytname = "YT: Dilla Editz" //ur yt chanel name
global.socialm = "GitHub: dilukahettiarachchi" //ur github or insta name
global.location = "Sri Lanka, Gampaha, Waththupitiwala" //ur location

//new
global.botname = "Chuti Suduu Md"
global.ownernumber = '94764570094'
global.ownername = '🦄Dilla Editz'
global.ownerNumber = ["94764570094@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@sl_dilla_gaming"
global.websitex = "https://youtu.be/L_SIk59QeAU"
global.wagc = "https://chat.whatsapp.com/I7TzWWxNhe1A0FMQjx86x5"
global.themeemoji = '🪀'
global.wm = "Dilla Bot Inc."
global.botscript = 'https://github.com/DGDilla/chutisuduuBot-MD6' //script link
global.packname = "Sticker By Chuti Suduu"
global.author = "🦄드림 가이 Dilla\n\n"
global.creator = "94764570094@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./DillaMedia/theme/chutisuduupic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DillaMedia/theme/chutisuduupic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DillaMedia/theme/chutisuduupic.jpg") //ur error pic
global.thumb = fs.readFileSync("./DillaMedia/theme/chutisuduupic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
