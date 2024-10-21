var mailer = require('nodemailer');

let transport = mailer.createTransport({
    service: 'gmail',
    auth: {
        user:'naruto.kira101@gmail.com',
        pass:'Your_Password'
    }

})
function mail() {
    let msgob = {
        from: 'naruto.kira101@gmail.com',
        to: 'rahulkumar12105@gmail.com',
        subject: 'thise is system generated mail',
        text: 'bahut bhagaya re baba ye le taufa',
    };
    transport.sendMail(msgob, (err,info) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log("info\n" + info);
        }
    })
}
mail();
