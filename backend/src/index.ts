import { config } from "./config";
import app from "./app";

app.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
