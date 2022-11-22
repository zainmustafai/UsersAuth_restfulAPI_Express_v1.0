const express = require("express");
const cors = require("cors");
const usersRouter = require("./routes/users.routes");
const createDatabaseConnection = require("./utils/database");
const server = express();
const PORT = 8080;
var corsOptions = {
  origin: "http://localhost:3000",
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
};

server.use(cors(corsOptions));
server.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }));

createDatabaseConnection();
usersRouter(server);
server.get("/", (req, res) => {
  res.send("HELLO FROM THE SERVER.");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
