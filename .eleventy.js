module.exports = function (config) {
    config.addPassthroughCopy("./src/css/");
    config.addPassthroughCopy("./src/img/");
    config.addPassthroughCopy("./src/js/");
    config.addPassthroughCopy("./src/data/");
    
    return {
      dir: {
        input: "src",
        output: "_site",
      },
    };
  };