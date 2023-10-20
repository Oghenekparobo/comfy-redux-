import { createSlice } from "@reduxjs/toolkit";

const themes = {
  retro: "retro",
  acid: "acid",
};

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.retro;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "stephen" },
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state) => {
      console.log("login");
    },

    logoutUser: (state) => {
      console.log("logout");
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
