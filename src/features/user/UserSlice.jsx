import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  retro: "retro",
  acid: "acid",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.retro;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const getUserFromLocalStoraage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const initialState = {
  user: getUserFromLocalStoraage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;

      localStorage.setItem("user", JSON.stringify(user));
    },

    logoutUser: (state) => {
      state.user = null;
      // console.log("logout");
      localStorage.removeItem("user");

      toast("logged out dos successfully");
    },
    themeToggle: (state) => {
      const { retro, acid } = themes;

      state.theme = state.theme === acid ? retro : acid;
      document.documentElement.setAttribute("data-theme", state.theme);

      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, themeToggle } = userSlice.actions;
export default userSlice.reducer;
