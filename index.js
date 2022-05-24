var http = require('http');
//var url = require('url');
var fs = require('fs');
var mailer = require('nodemailer');
const { parse } = require('querystring');

var smtpconfig={
    service:'gmail',
    port: '25',
    secure: false,
    ignoreTLS:true,
    auth: {
        user: 'naruto.kira101@gmail.com',
        pass: 'naruto.Kira_101',
    }
}
var transport = mailer.createTransport(smtpconfig);
var email= '8750792319j@gmail.com';
http.createServer((req, res) => {
    res.writeHead(200, 'content-type', 'text/html');
    res.write(fs.readFileSync('./index.html'));
    res.end();
    if (req.method = 'post') {
        req.on("data", (chunk) => {
            email=(parse(chunk.toString())).email;
            console.log(email);
            var msg=(parse(chunk.toString())).msg;
            msgob.to = email;
            msgob.text = msg;
            var limit = parseInt((parse(chunk.toString())).times);
            console.log("\n" + msg + "\n" + limit);
    
            for (let i = 0; i < limit; i++) {
                send();
            }
        })
       
    }

}).listen(8080);
//var mailbody = '<img style="width:250px;" src="cid:imgshit@naruto.ee"/>';

var msgob = {
    from: 'naruto.kira101@gmail.com',
    subject: 'Hurry up emergengcy from konoha!!!',
    attchment: [{
        filename: "naruto.png",
        path:'https://www.sciencealert.com/images/2022-03/processed/solar-orbiter-image-of-sun-with-earth-to-scale_1024.jpg'
        //cid:'imgshit@naruto.ee'
    }],
    //html: mailbody
};
function send() {
    transport.sendMail(msgob, (err, info) => {
        if (err) {
            console.log("error\n" + err);
        
        }
        else {
            console.log("info\n" + info);
        }
    });
}

