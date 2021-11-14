const express = require('express');
require('dotenv').config();
const connectDB = require('./lib/connectDB');
// routes module
const taskRoutes = require('./routes/task.route');
const app = express();

// middleware
app.use(express.json());

// routing
app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('node-express api');
});

const PORT = process.env.PORT || 5000;
const start_server = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`server is listening on port: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start_server();
