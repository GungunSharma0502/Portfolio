const express = require('express');
const app = express();
const contactRouter = require('./contactController');
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json()); // for parsing JSON body
app.use('/contact', contactRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
