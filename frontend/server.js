const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/menu-planning'));

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname + '/dist/menu-planning/index.html'));
});

app.listen(8081);