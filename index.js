const express = require("express");
const cors = require("cors");

const { Login } = require("./controllers/rhino_loginController");

const app = express();

app.use(cors());
app.use(express.json());

//app.post("/parasut-einvoce", createEInvoce);
app.post("/Login", Login);

app.get("*", function(req, res) 
{
    console.log(req.body);
  //res.status(200).send("OK");
});


app.listen( 3001, () => {
  console.log(`Sunucu ${3001} portunda başlatıldı...`);
});
