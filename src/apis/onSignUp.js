import axios from "axios";

export const onSignUp = (userInfo, router) => {
  axios
    .post("/user/join", userInfo)
    .then((res) => {
      console.log(res.data);
      router("/login");
    })
    .catch((err) => {
      console.log(err);
    });
};
