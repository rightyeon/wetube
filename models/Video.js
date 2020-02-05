import mongoose from "mongoose";

// Video가 어떤 형태인지를 저장한다
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "FileURL is required"
  },
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // Comment를 가져올 방법은 두 가지
  // 모든 코멘트 아이디들을 array로 video에 집어넣을 것인지, 코멘트에 연결된 video id 를 줄 것인지.
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// 생성한 스키마로 모델을 만들어준다.
const model = mongoose.model("Video", VideoSchema);

export default model;
