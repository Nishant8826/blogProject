const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: { type: String, require: true },
    authorId: { type: ObjectId, required: true, ref: "Author" },
    tags: [{ type: String }],
    category: [{ type: String, required: true }],
    subcategory: [ String ],
    isDeleted: { type: Boolean, default: false},
    isPublished: { type: Boolean, default: false},
    deletedAt:{type:Date,default:""},
    publishedAt:{type:Date,default:""}
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", blogSchema);
