var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var arguments = process.argv.splice(2,2)

console.log(arguments)

browserify(arguments[0])
  .transform("babelify", {presets: ["es2015"]})
  .bundle()
  .pipe(fs.createWriteStream(arguments[1]));
