const fs = require("fs");
const path = require("path");
const util = require("util");

const readdir = util.promisify(fs.readdir);
const stat = util.promisify(fs.stat);

const traverse = async (dir) => {
  try {
    const fileList = await readdir(dir);
    fileList.forEach(async (file) => {
      const f = path.join(dir, file);
      const stats = await stat(f);
      if (stats.isDirectory()) await traverse(f);
      else if (path.extname(f) == ".js") console.log(f);
    });
  } catch (err) {
    console.error(err);
  }
};

traverse("./test");
