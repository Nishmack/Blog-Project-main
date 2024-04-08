const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database");

const cors = require("cors");
const blogContent = require("./models/blogDetails");
const Comment = require("./models/comments");
const app = express();
app.use(cors());

const adminRoutes = require("./routes/admin");
app.use(bodyParser.json({ extended: false }));

app.use("/admin", adminRoutes);

Comment.belongsTo(blogContent);
blogContent.hasMany(Comment);

sequelize
  .sync()
  .then((result) => {
    console.log(result);

    app.listen(4000);
    console.log("server is listening on port 4000");
  })
  .catch((err) => {
    console.log(err);
    console.log("server not listening");
  });
