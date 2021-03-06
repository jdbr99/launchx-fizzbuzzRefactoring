const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (_, response) => {
    response.json({ message: "FizzBuzz Api welcome!" });
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({ amount: explorersInMission });
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const trick = ExplorerController.validateNumber(score);
    response.json(trick);
});
app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});