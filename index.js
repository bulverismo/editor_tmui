const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Ouvindo na porta ${port}`));
app.use(express.static('public'));