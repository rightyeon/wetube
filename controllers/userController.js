import routes from "../routes";

// user router 에 관한 로직

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  // bodyParser의 응답값인 body 를 가져온다
  const {
    body: { name, email, password, password2 }
  } = req;
  // password와 password2가 같은지 체크
  if (password !== password2) {
    // 패스워드가 다르면 status를 400으로 전달한 후 에러페이지를 render
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To Do : Register User (사용자 등록)
    // To Do : Log in user (사용자 로그인)
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do : Process Log Out
  res.redirect(routes.home);
};
export const users = (req, res) => {
  res.render("users", { pageTitle: "Users" });
};
export const userDetail = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail" });
};
export const editProfile = (req, res) => {
  res.render("editProfile", { pageTitle: "edit Profile" });
};
export const changePassword = (req, res) => {
  res.render("changePassword", { pageTitle: "Change Password" });
};
