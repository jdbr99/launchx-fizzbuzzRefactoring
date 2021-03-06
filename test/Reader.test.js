const Reader = require("../lib/utils/Reader");

describe("Reader service tests", () => {
    test("Read file contains correct data", () => {
        const path = "test/sample.json";
        const msg = Reader.readJsonFile(path);
        expect(msg.msg).toBe("Hello world!");
    });
});