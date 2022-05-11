const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

module.exports = class ExplorerController {
    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("lib/controllers/explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("lib/controllers/explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("lib/controllers/explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static validateNumber(number) {
        return FizzbuzzService.applyValidationInNumber(number);
    }
};