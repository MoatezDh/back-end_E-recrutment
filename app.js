const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const routers = require("./routes/test.route");
const cors = require('cors')
dotenv.config(); // Ensure this is at the top

const app = express();
const PORT = process.env.PORT || 3500;
app.use(cors({
  origin: 'http://localhost:3000' // Your React app URL
}));
// BodyParser Middleware
// app.use(express.json());

// Connexion à la base données
mongoose
  .connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à la base de données réussie");
  })
  .catch((err) => {
    console.log("Impossible de se connecter à la base de données", err);
    process.exit();
  });

if (process.env.NODE_ENV !== 'production') {
    app.use(morgan('dev'));
  }
  
app.use("/", routers);

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
