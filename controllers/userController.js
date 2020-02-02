// user router 에 관한 로직

export const join = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const login = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const logout = (req, res) => {
  res.render("Logout", { pageTitle: "Logout" });
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
