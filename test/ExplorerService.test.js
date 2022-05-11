const ExplorerService = require("../lib/services/ExplorerService");
const Reader = require("../lib/utils/Reader");

describe("ExplorerService tests", () => {
    test("Correctly filters by mission", () => {
        const explorers = Reader.readJsonFile("src/explorers.json");
        const node = ExplorerService.filterByMission(explorers, "node");
        const java = ExplorerService.filterByMission(explorers, "java");
        expect(node.length).toBe(10);
        expect(java.length).toBe(5);
    });

    test("Correctly returns length of filtered explorers", () => {
        const explorers = Reader.readJsonFile("src/explorers.json");
        const node = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const java = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(node).toBe(10);
        expect(java).toBe(5);
    });

    test("Correctly gets the usernames of filtered explorers", () => {
        const explorers = Reader.readJsonFile("src/explorers.json");
        const usernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        const first = usernames[0];
        expect(first).toBe("ajolonauta1");
    });
});