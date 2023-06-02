const Main = require("../Login.js");

async function Login(req, res, next) {
    console.log(req);
  await Main(req.body)
    .then((res1) => {
      res.send(res1);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = {
    Login,
};
