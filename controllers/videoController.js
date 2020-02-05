import routes from "../routes";
import Video from "../models/Video";
// video router 에 관한 js, render 로직
// render 함수의 첫번째 arg = 템플릿, 두번째 arg = 템플릿에 추가할 정보가 담긴 객체
export const home = async (req, res) => {
  try {
    // await는 다음 과정이 끝날 때까지 잠시 기다리라는 의미
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  // To Do : upload and save video
  // 사용자가 비디오를 업로드 하면, 비디오의 새로운 id 를 반환받고, videoDetail 페이지로 보내버리기
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Detail Video" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
