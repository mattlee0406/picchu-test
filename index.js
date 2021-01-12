const linebot = require('linebot');
const express = require('express');

const bot = linebot({
	channelId: '1655561465',
 	channelSecret: '291eb1e2ed4c46b7fa6b453db64ca838',
 	channelAccessToken: 'HKVMc0ED4cFGwsvnar8OYnVT6QQMoqDHRsVXzmItYLyfFrVdpVlQGTjXAjhBpxUoxOge+ljSNNSpCdQHFKV/0fVsKhWQv22OwEbPOYIkfojNo7hnPmqrxxAD7XkOmhAgR+2Ep4bVROuaDrNJUA0DWAdB04t89/1O/w1cDnyilFU='
});

const app = express();

const linebotParser = bot.parser();

app.get('/',function(req,res){
    res.send('Hello World!');
});

app.post('/linewebhook', linebotParser);

bot.on('message', function (event) {
	// event.reply(event.message.text).then(function (data) {
	// 	console.log('Success', data);
	// }).catch(function (error) {
	// 	console.log('Error', error);
	// });
	var replyMsg = `Hello你剛才說的是:${event.message.text}`;
	// event.message.text是使用者傳給bot的訊息
	// 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
	event.reply(replyMsg).then(function (data) {
	  // 當訊息成功回傳後的處理
	}).catch(function (error) {
	  // 當訊息回傳失敗後的處理
	});
});

app.listen(process.env.PORT || 80, function () {
	console.log('LineBot is running.');
});