const express = require('express');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/posts', postRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});