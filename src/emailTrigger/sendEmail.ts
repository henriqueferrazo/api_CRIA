const nodemailer = require('nodemailer');
const info = require('./config/email.config')

const transport = nodemailer.createTransport({
    host: info.host,
    port: info.port,
    auth: {
        user: info.user,
        pass: info.pass
    }
});
const runEmail = (email:string) => {
    const message = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "[ATENÇÃO] Ajude-nos a encontralo",
        text: "Olá cliente leia com atenção",
        html: "<h3>Acesse o link abaixo da imagem e marque a sua casa pra receber sua encomeda na sua porta</h3><br><br>",
        amp: `<!doctype html>
        <html ⚡4email>
          <head>
            <meta charset="utf-8">
            <style amp4email-boilerplate>body{visibility:hidden}</style>
            <script async src="https://cdn.ampproject.org/v0.js"></script>
            <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
          </head>
          <body>
            <p>Image: <amp-img src="'./img/cria.png'" width="600" height="400"/></p>
          </body>
        </html>`
    };
    
    return message;
    
}     


export default runEmail;