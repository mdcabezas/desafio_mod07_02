const fs = require("fs");

const jsonDB = "repertorio.json"

const fnReadFile = () => JSON.parse(fs.readFileSync(jsonDB, "utf8"));

const fnWriteFile = payload => fs.writeFileSync(jsonDB, JSON.stringify(payload));

module.exports = { fnReadFile, fnWriteFile }