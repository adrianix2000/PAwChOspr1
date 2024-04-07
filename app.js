const express = require('express');
const os = require('os');
const fetch = require('node-fetch').default;

const app = express();

app.get('/', (req, res) => {
    var hostname = os.hostname();
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
            console.log(data.ip);
            response = "nazwa hosta: " + hostname + "<br>" +  
                        " adres ip2: " + data.ip + "<br>" + 
                        " wersja aplikacji:  " + process.env.APP_VERSION + "<br>";
            res.send(response);
        }).catch(err => {
            console.log(err);
            res.send(`Wystąpił błąd: ${err}`);
        });
});

app.listen(8080, () => {
    console.log('Aplikacja działa na porcie 8080');
});
