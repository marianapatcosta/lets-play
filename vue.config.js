module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_main.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/lets-play/" : "/",
};
