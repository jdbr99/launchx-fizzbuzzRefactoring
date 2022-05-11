const fs = require("fs")
module.exports = class Reader {
    static readJsonFile(path) {
        const file = fs.readFileSync(path)
        const json = JSON.parse(file)
        return json
    }
}