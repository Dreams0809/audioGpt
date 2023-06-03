module.exports = {
  // getIndex: (req, res) => {
  //   res.render("landingPage.ejs");
  // },
   getHome: (req,res)=>{
      res.render('index.ejs', {user: request.user})
  }
};