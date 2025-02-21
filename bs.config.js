// browserSync configuration
export default {
      server: {
            baseDir: "./", // Serves files from the root directory
            index: "index.html", // Default file to serve
          },
      files: ["*.html", "public/css/**/*.css", "public/js/**/*.js"], // files to watch
      ignore: ['node_modules'], // files to ignore
      open: true, // disable opening the browser
      notify: false, // disable notifications
}