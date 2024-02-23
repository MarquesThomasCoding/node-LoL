import { insertChampions } from "../controllers/ChampionController.js";

const seed = async () => {
    insertChampions({}, { json: (data) => console.log(data)})
}

seed();
