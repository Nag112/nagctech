var express = require('express');
const sgMail = require('@sendgrid/mail');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.listen(5501);
app.get('/mail',(req,res)=>{
    if(req.headers.token == 'GT73K1w_gnsj-qSNdE_pcOP86sCJLsNgGu_ZyAEStdU') 
    {
        const msg = {
            to: 'raju11297@gmail.com',
            from: 'no-reply@soungster.com',
            subject: req.body.subject,
            html: `<p>${req.body.message}</p>`
          };
          sgMail.send(msg).then((response)=>{
            res.status(200).send({status:true});
          }).catch((err)=>{
            res.status(201).send({status:false,error:err.message});});
    }
   else
   {
    res.status(401).send({status:false,error:'unauthorizied'});
   }
});
app.get('/send_mail',(req,res)=>{
        const msg = {
            to: 'nagacharan@sounsgter.com',
            from: 'no-reply@soungster.com',
            subject: `I am ${req.body.name}, ${req.body.email}. ${req.body.subject}`,
            html: `<p>${req.body.message}</p>`
          };
          sgMail.send(msg).then((response)=>{
            res.status(200).send({status:true});
          }).catch((err)=>{
            res.status(201).send({status:false,error:err.message});});
});
