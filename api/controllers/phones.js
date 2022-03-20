'use strict'

const fs = require('fs');
const path = require('path');

function list(req, res) {
    const fullPath = path.join(__dirname, '..', 'assets', 'phones.json');
    let rawData = fs.readFileSync(fullPath);
    let phones = JSON.parse(rawData);
    res.status(200).send(phones);
}

module.exports = {
    list
};