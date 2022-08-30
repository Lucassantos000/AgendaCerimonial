
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

//MAILTRAP UMA BIBLIOTECA PARA ENVIAR EMAIL PERTECENTE AO MAILTRAP (SITE)
// const {MailtrapClient} = require("mailtrap");
/*
async  function sendMail(destinatario){
    
 const TOKEN = "3a5ae58893a4c1264e5e11dd3275d7c1";
 const SENDER_EMAIL = "lucasnapsistema@gmail.com" 
 const RECIPIENT_EMAIL = destinatario || "lucaspiques7@gmail.com";
 
 const client = new MailtrapClient({token:TOKEN});

 const sender = {name: "cerimonialUEAsistema", email: SENDER_EMAIL};

 client.send({
    from: sender,
    to: [{email:RECIPIENT_EMAIL}],
    subject: "Hello from Mailtrap!",
    text: "BEM-VINDO TO MAILTRAP SENDING",
 }).then((resp)=>{
    console.log(resp);
 }).catch((err)=>{
    console.error(err);
 })

}

sendMail(); 
*/

// fazer a requisiçãõ do e-mail e do NODEMAIL (pacote para mandar email utilizando o gmail cadastrado);
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e6b10d89e01a0c",
      pass: "0b085a123cd788"
    }
  });

async function sendMail(destino, title, msg){
const mailOptions = 
    {
        from: 'lucasnapsistema@gmail.com',
        to:  destino || 'lucasnapsistema@gmail.com',
        subject: title || 'Teste de Aviso',
        html: msg || "<p>Olá, estou testando o e-mail</p>"
    };

transporter.sendMail(mailOptions, async (err, info) => {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

}


//body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//importado a tabela candidatos
const db = require("./db/db");


const { json } = require("body-parser");


//ejs
app.set('view engine', 'ejs');

//arquivos estáticos
app.use(express.static("public"));


app.get("/", (req,res)=>{
    res.render("redirect.ejs");
});

app.get("/home", async (req, res)=>{

    try{
        res.status(200).render("index.ejs");
    }
    catch{
        console.log("Houve algum erro, por favor, contate o administrador do site");
    }
    
});

app.get("/homeConsuniv", async (req, res)=>{

    try{
        res.status(200).render("indexMConsuniv.ejs");
    }
    catch{
        console.log("Houve algum erro, por favor, contate o administrador do site");
    }
    
});


app.use(function(req, res, next) {
    res.status(404).render("error404.ejs");
});

app.listen(PORT, ()=>{
    console.log("APP no ar na porta " + PORT);
});