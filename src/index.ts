import express from 'express';
import path from 'path';
import { gameRoute } from '../routes/game.routes';
import { statusRoute } from '../routes/status.routes';


const app = express();

app.use(express.static(path.join(__dirname, "../public")))

function main() {
    app.listen(3000, () => {
        console.log("aplicaçao rodando!");
        console.log("http://localhost:3000/status")
    });
}

main();