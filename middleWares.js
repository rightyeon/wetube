import multer from "multer"; // upload한 파일의 URL을 반환해주는 미들웨어
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" }); // file을 업로드하면 videos/ 폴더에 Upload

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "WeTube";
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
};

export const uploadVideo = multerVideo.single("videoFile"); // single은 오직 하나의 파일만 Upload 할 수 있다는 뜻. name field가 들어감.
