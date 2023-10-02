const { app } = require("./routes");
require("dotenv").config();

app.listen(process.env.PORT, () => console.log(`Running on port: ${process.env.PORT}`));
