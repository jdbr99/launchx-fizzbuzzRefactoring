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
});