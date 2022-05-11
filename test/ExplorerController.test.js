const ExplorerController = require("../lib/controllers/ExplorerController");

describe("ExplorerController tests", () => {
    test("Correctly gets explorers by mission", () => {
        const node = ExplorerController.getExplorersByMission("node");
        expect(node[0].githubUsername).toBe("ajolonauta1");
    });

    test("Correctly gets explorers usernames", () => {
        const node = ExplorerController.getExplorersUsernamesByMission("node");
        expect(node[0]).toBe("ajolonauta1");
    });

    test("Correctly gets explorer amounts", () => {
        const node = ExplorerController.getExplorersAmonutByMission("node");
        expect(node).toBe(10);
    });

    test("Correctly gets tricks from number", () => {
        const score = ExplorerController.validateNumber(1);
        const fizz = ExplorerController.validateNumber(3);
        const buzz = ExplorerController.validateNumber(5);
        const fizzbuzz = ExplorerController.validateNumber(15);
        expect(score.trick).toBe(1);
        expect(fizz.trick).toBe("FIZZ");
        expect(buzz.trick).toBe("BUZZ");
        expect(fizzbuzz.trick).toBe("FIZZBUZZ");
    });
});