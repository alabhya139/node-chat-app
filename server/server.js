const path = require('path');

const express = require('express');
const port = process.env.PORT || 3000

const publiPath = path.join(__dirname,'../public');

const app = express();
app.use(express.static(publiPath));


app.listen(port,()=>console.log(`Server Up and running on port ${port}`));
