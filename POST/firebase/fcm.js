const express = require('express');
const router = express.Router();
const admin = require('./admin.js'); //Importieren des admin Moduls. Siehe .functions/admin.js
const messageFunctions = require('./.functions/messageFunctions.js');  //Importieren der Methoden zur Versendung von Notifications (zu dt. Benachrichtigung)

router.post('/', function (req, res) {
    messageFunctions.sendMessage(req.body) // Aufruf der sendMessage Methode mit dem body (das JSON Objekt welches mittels POST übermittelt wird) Attribut der Anfrage als Parameter.
    return res.status(200).send('Message Sent!'); // Status der Anfrage wird auf 200 festgelegt. Die Nachricht "Message Sent!" wird gesendet.
});

router.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname + '/../html/site.html'));
});

module.exports = router; // Das router Objekt wird exportiert, damit es als Modul anderweitig verwendet werden kann.
