module.exports = {
  getIndex: (req, res) => {
    res.render("landingPage.ejs");
  },
  
   getHome: (request,response)=>{
      response.render('index.ejs', {user: request.user})
  }
};