
const Main = async function Main(body) {
   
    let emails = new Array();
  

    try {
        console.log(body.mail);
        emails=["oro@gmail.com","ataly08@hotmail.com"];
        if(emails.includes(body.mail))
        {
            return Promise.resolve("ss");

        }else{
            return Promise.resolve("hata");

        }

        
     
     
    } catch (err) {
      console.log("hata", err);
      output = new Error(err);
      return Promise.reject(err);
    }
  };
  exports = module.exports = Main;
