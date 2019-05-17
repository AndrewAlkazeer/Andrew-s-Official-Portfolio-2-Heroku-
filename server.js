const express = require('express');
const app = express();
var forceSsl = require('force-ssl-heroku');
app.use(forceSsl);
app.get('/ping', pingHandler);
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
    
app.get('/contact', (req, res)=>{

    res.sendFile(__dirname + '/public/sayHello/sayHello.html')
});

app.get('/home', (req, res)=>{

    res.sendFile(__dirname + '/public/index.html')
});

const server = app.listen(PORT, ()=>{
    console.log('Server is listening on port 3000');
})
