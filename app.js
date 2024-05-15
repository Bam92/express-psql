import express from "express";
import morgan from "morgan";

const app = express();

app.use(morgan('combined'))
app.set('view engine', 'ejs');

// students list
app.get("/", (req, res) => res.render("home"))
app.get("/notes", (req, res) => res.render("notes"))

export default app;

