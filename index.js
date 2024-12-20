const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('src', {extensions: ["html"]}));
app.use(express.static('assets'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});