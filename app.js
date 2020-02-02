import bodyParser from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan"; // logger 미들웨어
import helmet from "helmet"; // node js 의 보안을 위한 미들웨어
import { localsMiddleware } from "./middleWares";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express();

app.set("view engine", "pug");

// create Middle Ware (execute top to bottom)
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json()); // json 으로 전송하면 서버에서도 json을 읽을 수 있게 함
app.use(bodyParser.urlencoded({ extended: true })); // html 을 전송하면 html을 읽을 수 있게 함
app.use(morgan("dev")); // morgan is record everything

// local middle ware 는 지역변수를 전역변수로 사용하도록 만들어준다
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

// 어디서 import app을 하면 app object를 주겠다
export default app;
