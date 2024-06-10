const express = require('express');
const bodyParser = require('body-parser');
const CryptoJS = require('crypto-js');

const app = express();

app.use(bodyParser.json());

app.post('/submit-message', (req, res) => {
    const { name, email, message } = req.body;

   
    const bytes  = CryptoJS.AES.decrypt(message, 'secret passphrase');
    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

    console.log('Decrypted Message:', decryptedMessage);

   
    res.status(200).send('Message received successfully');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
