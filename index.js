const express = require("express");
const cors = require("cors");

const { Login } = require("./controllers/rhino_loginController");

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.Port||5000;
//app.post("/parasut-einvoce", createEInvoce);
app.post("/Login", Login);

app.get("*", function(req, res) 
{
    console.log(req.body);
  //res.status(200).send("OK");
});


app.listen( port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
