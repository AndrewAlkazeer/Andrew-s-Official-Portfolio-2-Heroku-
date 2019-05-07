const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
    
app.get('/contact', (req, res)=>{

    res.sendFile(__dirname + '/public/sayHello/sayHello.html')
});

app.get('/home', (req, res)=>{

    res.sendFile(__dirname + '/public/index.html')
});

const server = app.listen(3000, ()=>{
    console.log('Server is listening on port 3000');
})