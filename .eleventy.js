module.exports = function (config) {
    config.addPassthroughCopy("./src/data/");
    config.addPassthroughCopy("./src/img/");
    config.addPassthroughCopy("./src/js/");
    config.addPassthroughCopy("./src/css/");
    
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };