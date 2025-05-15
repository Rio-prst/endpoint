const express = require('express');
const app = express();
const router = require('./routes')

app.use(express.json());
app.use(router);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
