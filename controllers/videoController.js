import { videos } from "../db";
import routes from "../routes";
// video router 에 관한 로직
// render 함수의 첫번째 arg = 템플릿, 두번째 arg = 템플릿에 추가할 정보가 담긴 객체
export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description }
  } = req;
  // To Do : upload and save video
  // 사용자가 비디오를 업로드 하면, 비디오의 새로운 id 를 반환받고, videoDetail 페이지로 보내버리기
  res.redirect(routes.videoDetail(331231));
};

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Detail Video" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
