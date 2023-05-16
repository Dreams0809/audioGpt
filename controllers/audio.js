const Profile = require("../models/Profile")


module.exports = {
     
    getHome: async (req, res) => {
        try {
          const searchUser = await Profile.find({ userId: request.user.id });
          res.render("index.ejs", { profile: searchUser, user: req.user });
        } catch (err) {
          console.log(err);
        }
      },
}
