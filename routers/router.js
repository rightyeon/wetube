// router는 많은 route가 담긴 파일

import express from "express";
// export default 할 경우에 import 하는 곳에서는 import something from "something" 으로,
// 이렇게 export 할 경우에는 import { something } from "something" 으로 import 해야함
export const router = express.Router();

