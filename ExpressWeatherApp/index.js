const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname,"./public");
const viewsPath = path.join(__dirname,"./templates/views");
const partialsPath = path.join(__dirname,"./templates/partials");
// const staticPath = (__dirname + "../public");

//Running static website
app.use(express.static(staticPath));
app.set("view engine","hbs");
app.set('views',viewsPath);
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//Routing
app.get('/',(req,res)=>{
    res.render('home.hbs');
});
app.get('/about',(req,res)=>{
    res.render('about.hbs');
});
app.get('/weather',(req,res)=>{
    res.render("weather.hbs");
});
app.get('*',(req,res)=>{
    res.render("error.hbs",{
        errorCode : "404 Error"
    });
})

app.listen(port,()=>{
    console.log(`Listening to port ${port}......`);
})