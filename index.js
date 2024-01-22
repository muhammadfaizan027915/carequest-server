const express = require("express");
const db = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const adminRoutes = require("./routes/adminRoutes");
const homeRoutes = require("./routes/homeRoutes");

// global middlewares
db.config();
app.use([
  morgan("dev"),
  express.json(),
  express.urlencoded({extended: false}),
  cors({
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "PUT", "POST", "DELETE"],
  }),
]);

// routes
app.use("/api/admin", adminRoutes);
app.use("/api/home", homeRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Started at PORT: ", PORT);
});
