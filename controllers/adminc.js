const blogContent = require("../models/blogDetails");
const Comment = require("../models/comments");
//posting blog details to db

exports.postBlogDetails = async (req, res, next) => {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const content = req.body.content;
    const data = await blogContent.create({
      Title: title,
      Author: author,
      Content: content,
    });
    res.status(201).json({ newBlogData: data });
  } catch (err) {
    console.log(err);
  }
};

//fetching blog details
exports.getBlogDetails = async (req, res, next) => {
  try {
    const data = await blogContent.findAll();
    console.log("data from database");
    console.log(data);

    res.status(200).json({ allBlogData: data });
  } catch (err) {
    console.log(err);
  }
};
//posting comments
exports.postComments = async (req, res, next) => {
  try {
    const comment = req.body.commentDetail;
    const bdetails = req.body.BlogDetails;
    const data = await Comment.create({
      commentDetail: comment,
      BlogId: bdetails.id,
    });
    res.status(200).json({ allcommentData: data });
  } catch (err) {
    console.log(err);
  }
};

//fetching comments
exports.getComments = async (req, res, next) => {
  try {
    const BlogId = req.params.id;
    console.log(BlogId);
    const commentsData = await Comment.findAll({
      where: {
        BlogId: BlogId,
      },
    });
    res.status(200).json({ commentsData: commentsData });
  } catch (err) {
    console.log("comment error");
    console.log(err);
  }
};
//deleting comments
exports.deleteComment = async (req, res, next) => {
  try {
    const commentId = req.params.id;
    const data = await Comment.destroy({
      where: {
        id: commentId,
      },
    });
    res.status(201).json({ commentsDetails: data });
  } catch (err) {
    console.log(err);
  }
};
