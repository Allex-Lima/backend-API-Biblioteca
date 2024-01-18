import app from "./sevidor.js";
import "dotenv/config";
import connectDatabase from "./src/database/db.js";

const port = process.env.PORT || 3000;

connectDatabase();
app.listen(port, () => console.log(`--> SERVER RUN IN http://localhost:${port}`));
