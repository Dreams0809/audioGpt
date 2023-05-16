const Profile = require("../models/Profile")


module.exports = {
     
    getHome: async (req, res) => {
        try {
          const user = await User.find({ user: req.user.userName });
          res.render("index.ejs", { user: userName, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
}
